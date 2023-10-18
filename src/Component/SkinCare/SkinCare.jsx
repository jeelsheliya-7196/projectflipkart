import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap'
import { base_url } from '../../Api/Api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { Cart_Add } from '../../Services/Action/Cart_Add'



const SkinCare =
    axios.get(base_url + "/products").then((res) => {
        // console.log("res",res.data);
        let e_data = res.data;

        // console.log(e_data,"e_data");

        let skincare = e_data.filter((skin) => {
            // console.log((skin,"skin")

            // let data = [];
            if (skin.category == 'Skin care & Hair') {
                return skin;
            }
            //  return d.category == 'Skin care & Hair';
        })
        // console.log("return", skincare);
        return skincare;


    }).catch((err) => {
        console.log("err", err);
    })

function Skin_Care() {

   const navigate = useNavigate();
   const dispatch = useDispatch();

    const handleClick = (e) =>{

        dispatch(Cart_Add(e))
        navigate('/cart');
    }

    // console.log("print", printAddress);
    const [Skin_carepro, setSkin_carepro] = useState([]);
    // console.log(ele_pro, "ele_po");

    SkinCare.then((res) => {
        // console.log("Res", res);
        // return res;   
        setSkin_carepro(res);
    }).catch((err) => {
        console.log("Err", err);
    })

    return (
        <>

            <div className='electronic_pro'>
                <div className='electronic'>Best Skin Product</div>
                <p>{Skin_carepro.length} items</p>
            </div>
            <hr />

            <Container>
                <Row>
                    <div className='product-show'>
                        {
                            Skin_carepro.map((e) => {
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

export default Skin_Care