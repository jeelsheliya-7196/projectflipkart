import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap'
import { base_url } from '../../Api/Api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { Cart_Add } from '../../Services/Action/Cart_Add'



const Homekitchen =
    axios.get(base_url + "/products").then((res) => {
        // console.log("res",res.data);
        let e_data = res.data;

        // console.log(e_data,"e_data");

        let h_kitchen = e_data.filter((home) => {
            // console.log((skin,"skin")

            // let data = [];
            if (home.category == 'Home & Kitchen') {
                return home;
            }
            //  return d.category == 'Skin care & Hair';
        })
        // console.log("return", h_kitchen);
        return h_kitchen;


    }).catch((err) => {
        console.log("err", err);
    })

function Home_kitchen() {

   const navigate = useNavigate();
   const dispatch = useDispatch();

    const handleClick = (e) =>{

        dispatch(Cart_Add(e))
        navigate('/cart');
    }

    // console.log("print", printAddress);
    const [Home_kitch, setHome_kitch] = useState([]);
    // console.log(ele_pro, "ele_po");

    Homekitchen.then((res) => {
        // console.log("Res", res);
        // return res;   
        setHome_kitch(res);
    }).catch((err) => {
        console.log("Err", err);
    })

    return (
        <>

            <div className='electronic_pro'>
                <div className='electronic'>Best Home & Kitchen Product</div>
                <p>{Home_kitch.length} items</p>
            </div>
            <hr />

            <Container>
                <Row>
                    <div className='product-show'>
                        {
                            Home_kitch.map((e) => {
                                return (
                                    // console.log("e",e) &&
                                    <>

                                        <Card style={{ width: '288px', margin: "20px" }}>
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

export default Home_kitchen;