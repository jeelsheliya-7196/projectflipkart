import React, { useState } from 'react'
import { Button, Card, Container, ListGroup, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router'
import Count from '../Count/Count';
import Total from '../Total/Total';
import { delte } from '../../Services/Action/Cart_Add';

function AddToCart() {

    const Add_to = useSelector(state => state.Cart_Addreducer.cart);

    const dispatch = useDispatch();

    const [total, setTotal] = useState(0);

    // const handleInc = () => {
    //     setCount(count + 1);
    //     Total();
    // }

    // const handleDec = () => {
    //     if (count > 1)
    //         setCount(count - 1)
    //     Total();
    // }

    // console.log("Add_to", Add_to);

    // const Total = (id=0) => {
    //     if(Add_to.length != 0){
    //         let price = Add_to[id].price;
    //         console.log("price",price);
    //         // setTotal(count * total);

    //     }
    // }

    const handledelete = (id) => {
        dispatch(delte(id))
    }

    return (
        <>
            <Container>
                <Row>
                    {
                        Add_to.length > 0 ?
                            <div className='mt-4 d-flex'>


                                <div className='col-8 d-flex card_show'>
                                    {/* <Table striped bordered hover>
                                <thead>

                                </thead>
                                <tbody>
                                    {
                                        Add_to.map((e, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div style={{ width: "112px", height: "112px" }}>
                                                            <img style={{ width: "100%", height: "100px" }} src={e.thumbnail} alt="" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <a className='Add_title'>{e.title}</a>
                                                            <Count id={index} />
                                                            <p>${e.price}</p>
                                                            <p >{e.description}</p>

                                                        </div>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table> */}

                                    {
                                        Add_to.map((e, index) => {
                                            // console.log("e",e);
                                            return (
                                                <Card style={{ width: '18rem', marginBottom: '10px' }}>
                                                    <Card.Img variant="top" src={e.thumbnail} />
                                                    <Card.Body>
                                                        <Card.Title>{e.title}</Card.Title>
                                                        <Card.Text>{e.description}</Card.Text>
                                                        <Count id={index} />
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroup.Item className='text-center'>${e.price}</ListGroup.Item>
                                                    </ListGroup>
                                                    <div className='text-center m-3'>
                                                        <Button className='btn-danger' onClick={() => handledelete(e.id)}>Delete</Button>

                                                    </div>
                                                </Card>
                                            )
                                        })

                                    }
                                </div>

                                <div className='col-4 Pricedetail'>
                                    <Total />
                                </div>




                            </div>

                            :
                            <div className='cart-img'>
                                <img src="cart.jpg" alt="cart" />
                            </div>
                    }

                </Row>
            </Container>
        </>
    )
}

export default AddToCart