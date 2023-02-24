import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './Navbar/navbar';
import "./components.css"
import { Button } from 'react-bootstrap';

function Cart() {

    const location = useLocation();
    const { image, title, price } = location.state
    return (
        <>
            <NavBar />
            <Container fluid="md" className='cards'>
                <Row >
                    <Col className='cart' md={8} >
                        SHOPPING CART
                        <Row className='insidecart'>
                            <Col md={6}>Item</Col>
                            <Col md={2}></Col>
                            <Col md={2} >Qty</Col>
                            <Col md={2}>Subtotal</Col>
                            <Row className='sec-inside'>
                                <Col md={2}><img src={image} width="100%" /></Col>
                                <Col md={6} className='mt-5'>{title} </Col>
                                <Col md={2} className='mt-5'>1</Col>
                                <Col md={2} className='mt-5'>Rs: {price}</Col>
                            </Row>
                            <Row>
                                <Col md={3}></Col>
                                <Col md={3} className='p-2 right'><Button className='text-small'>Continue Shopping</Button></Col>
                                <Col md={3} className='p-2 right'><Button className='text-small'>Clear Shopping Cart</Button></Col>
                                <Col md={3} className='p-2 right'><Button className='text-small'>Update Shopping Cart</Button></Col>
                               
                            </Row>

                        </Row>
                    </Col>
                    <Col md={4} >
                        <div className='right-col'>
                            <div>Summery</div>
                            <hr />
                            <div><b>Estimate Shipping and Tax</b></div>
                            <hr />
                            <div>
                                <Row>
                                    <Col md={6}>Subtotal</Col>
                                    <Col md={6} className="right">Rs: {price}</Col>
                                </Row>
                                <Row>
                                    <Col md={6}>Shipping (Free Ground Shipping)</Col>
                                    <Col md={6} className="right">Rs: 0.00</Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col md={6}><b>Order Total</b></Col>
                                    <Col md={6} className="right"><b>Rs: {price}</b></Col>
                                </Row>
                            </div>
                            <div className='p-3'><Button variant="primary" className='w-100 p-2' >Proceed To Checkout</Button></div>
                            <div className='text-center'>Check Out with Multiple Addresses</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cart;