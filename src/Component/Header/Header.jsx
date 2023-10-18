import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form, ListGroup, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router'
import { base_url } from '../../Api/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Logout_async } from '../../Services/Action/Authntication'

function Header() {

    const dispatch = useDispatch();

    const { login } = useSelector(state => state.Aunthntication_reducer);

    const navigate = useNavigate()
    const [search, setsearch] = useState([])

    const [inputlist, setinputList] = useState({
        search: ''
    })

    const handleChange = (e) => {
        // console.log("e",e.target);
        let name = e.target.name
        let value = e.target.value

        setinputList({ ...inputlist, [name]: value })

        let search_show = document.getElementById("sea_show")

        if (value) {
            search_show.classList.add("show");
        }
        else {
            search_show.classList.remove("show");

        }

        axios.get(base_url + "/products").then((res) => {
            // console.log("res",res);

            let Search_Data = res.data.filter((e) => {
                return e.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
            })
            setsearch(Search_Data);
            // console.log("Search_Data", Search_Data);

        }).catch((err) => {
            console.log("errr", err);
        })
        // console.log("ser_data",ser_data);


        // console.log("se",set_data);
        // setuserView(set_data);
    }

    const handleClick = () => {
        navigate('/login')
    }

    const handleClick_logout = () => {
        dispatch(Logout_async());
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: "pointer" }}><img src="logo.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex search_form">
                            <div className='d-flex search_data'>
                                <Form.Control type="search" placeholder="Search" className="me-2" onChange={(e) => handleChange(e)} aria-label="Search" />
                                <Button className='btn-light'><BsSearch /></Button>
                            </div>
                            <div className='sear_list' id='sea_show'>
                                <ListGroup>
                                    {
                                        search.map((s) => {
                                            console.log("s", s);
                                            return (
                                                <ListGroup.Item>{s.title}</ListGroup.Item>
                                            )

                                        })
                                    }

                                </ListGroup>

                            </div>
                        </Form>


                    </Navbar.Collapse>
                    {
                        login ?
                            <Button variant="light" style={{ margin: "0 20px" }} onClick={handleClick_logout}>Logout</Button>
                            :
                            <Button variant="light" style={{ margin: "0 20px" }} onClick={handleClick}>Login</Button>
                    }
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#">Become a Seller</Nav.Link>
                        <NavDropdown title="More" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Notification</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                24*7 Customer Care
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Advertise
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Download App
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => navigate('/cart')}><FaShoppingCart style={{ margin: "0 8px" }} />Cart</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
