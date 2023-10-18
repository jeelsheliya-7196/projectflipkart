import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap'
import { base_url } from '../../Api/Api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { Cart_Add } from '../../Services/Action/Cart_Add'


const ele_product =

axios.get(base_url + "/products").then((res) => {
     console.log("res",res.data);
    let e_data = res.data;

    console.log(e_data,"e_data");

    let ele_pro = e_data.filter((el) => {
        // console.log((el,"el")

        // let data = [];
        if (el.category == 'electornics') {
            return el;
        }
        //  return d.category == 'electornics';
    })
    // console.log("return", ele_pro);
    return ele_pro;


}).catch((err) => {
    console.log("err", err);
 })



function Electronic_product() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {

        dispatch(Cart_Add(e))
        navigate('/cart');
    }

    // console.log("print", printAddress);
    const [ele_pro, setEle_pro] = useState([]);
    // console.log(ele_pro, "ele_po");

    ele_product.then((res) => {
        // console.log("Res", res);
        // return res;   
        setEle_pro(res);
    }).catch((err) => {
        console.log("Err", err);
    })

    return (
        <>

            <div className='electronic_pro'>
                <div className='electronic'>Best of Electronics</div>
                <p>{ele_pro.length} items</p>
            </div>
            <hr />

            <Container>
                <Row>
                    <div className='product-show'>
                        {
                            ele_pro.map((e) => {
                                return (
                                    // console.log("e",e) &&
                                    <>

                                        <Card style={{ width: '18rem', margin: "20px" }}>
                                            <Card.Img variant="top" src={e.thumbnail} />
                                            <Card.Body>
                                                <Card.Title>{e.title}</Card.Title>
                                                <ListGroup.Item>$ {e.price}</ListGroup.Item>
                                                <Card.Text>
                                                    {e.brand}
                                                </Card.Text>
                                                <Button onClick={() => handleClick(e)} variant="primary">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>


                                    </>
                                )
                            })
                        }

                    </div>
                </Row>
            </Container>


        </>
    )
}

export default Electronic_product