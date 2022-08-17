import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SuggestedProduct extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='text-center'>
                    <div className='section-title text-center mb-55'>
                        <h2>You May Also Like</h2>
                        <p>some of our exclusive collection, you may like</p>
                    </div>
                    <Row>
                        <Col className='p-1' key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Link to={"/productdetails"}>
                                <Card className='card image-box'>
                                    <img className='center' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Card className='card image-box'>
                                <img className='center' src="https://m.media-amazon.com/images/I/51-2ijAGDxL._AC_SX679_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Card className='card image-box'>
                                <img className='center' src="https://m.media-amazon.com/images/I/51-2ijAGDxL._AC_SX679_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Card className='card image-box'>
                                <img className='center' src="https://m.media-amazon.com/images/I/51-2ijAGDxL._AC_SX679_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Card className='card image-box'>
                                <img className='center' src="https://m.media-amazon.com/images/I/51-2ijAGDxL._AC_SX679_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
                            <Card className='card image-box'>
                                <img className='center' src="https://m.media-amazon.com/images/I/51-2ijAGDxL._AC_SX679_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default SuggestedProduct;
