import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './Navbar/navbar';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Details() {

    const data = useLocation();
    const { id, title, image ,description,category,rating,price} = data.state;
    // console.log(data);
   
    const navigate = useNavigate();

    const cart = (e) => {
        console.log(e);
        navigate("/cart", {
          state: e
        })
      }


    return (
        <>
            <NavBar />
            {/* <div className='mainDetails'>
            
            <Container  fluid="md" >
                <Row>
                    <Col md={4}><img src={image} width="100%" /></Col>
                    <Col md={8} >
                        
                        <Row className='right-detail'>
                        <Row>{title}</Row>
                        <br />
                            <Col>
                            <Row>Sku : {id}</Row>
                            <Row>Condition</Row>
                            <Row>Sku</Row>
                            <Row>Sku</Row>
                            </Col>
                            <Col>
                            <Row>Sku</Row>
                            <Row>Sku</Row>
                            <Row>Sku</Row>
                            <Row>Sku</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </div> */}

            <div className="mainDetails">
                <Container fluid="md" >
                    <Row >
                        <Col><img src={image} width=" 380px" /></Col>
                        <Col className="mid" >
                            <h2>{title}</h2>
                            <h5>{description}</h5>
                            <h5><b>SKU : 0000{id}</b></h5>
                            <h5><b>CATEGORY : {category}</b></h5>
                            <h5><b>RATING : {rating.rate}</b></h5>
                            <h5><b>REVIEWS COUNT : {rating.rate}</b></h5>
                            <h2 className="price"><b>Rs:{price}</b></h2>
                            <div className="btnMain"> <button onClick={() => { cart(data.state) }}>Add to cart</button></div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Details;