import axios from 'axios'
import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { base_url } from '../../Api/Api'
import { useNavigate } from 'react-router'




function ViewProduct() {

    const navigate = useNavigate();


    const filterdata = () => {
        axios.get(base_url + "/products").then((res) => {
            let filter_data = res.data;
            // console.log(filter_data, "res");
            const newfilterdata = filter_data.map((filter) => {
                console.log("filter",filter);
                return filter.category;
            })
            // console.log(newfilterdata,"newfilterdata");
// 

            const Filter_data = newfilterdata.filter((filter, index) => {
                return newfilterdata.indexOf(filter) == index;
            })
            // console.log("Filter_data", Filter_data);
            return Filter_data;

        }).catch((err) => {
            console.log("err", err);
        })

// 



    }

    // filterdata();



    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex mt-5 card-show' >
                        <Card className='card-1'>
                            <Card.Body>
                                <Card.Title>Best Of Electronics</Card.Title>
                                <Button variant="primary" onClick={()=>navigate('/electronic_show')}>VIEW ALL</Button>
                            </Card.Body>
                        </Card>
                        {/* {
                            filterdata().map((fd)=>{
                                console.log(fd,"fd");
                            })
                        } */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" />
                            <Card.Body>
                                <Card.Title>iPhone X</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" />
                            <Card.Body>
                                <Card.Title>Oppo F19</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/6/thumbnail.png" />
                            <Card.Body>
                                <Card.Title>Mac Book</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex mt-5 card-show'>
                        <Card className='card-2'>
                            <Card.Body>
                                <Card.Title style={{marginTop: "60px"}}>Skin care & Hair</Card.Title>
                                <Button variant="primary" onClick={()=>navigate('/skin_care')}>VIEW ALL</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card-show'>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/11/1.jpg" />
                            <Card.Body>
                                <Card.Title>Perfume</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card-show'>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/16/3.jpg" />
                            <Card.Body>
                                <Card.Title>L'oreal serum</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card-show'>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/19/3.png" />
                            <Card.Body>
                                <Card.Title>White Rice</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex mt-5 card-show'>
                        <Card className='card-3'>
                            <Card.Body>
                                <Card.Title style={{marginTop: "60px"}}>Home & Kitchen</Card.Title>
                                <Button variant="primary" onClick={()=>navigate('/home_kitchen')}>VIEW ALL</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card-show'>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/26/3.jpg" />
                            <Card.Body>
                                {/* <Card.Title>iPhone X</Card.Title> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card-show'>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/24/2.jpg" />
                            <Card.Body>
                                {/* <Card.Title>iPhone X</Card.Title> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='card-show'>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/29/2.jpg" />
                            <Card.Body>
                                {/* <Card.Title>iPhone X</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ViewProduct
