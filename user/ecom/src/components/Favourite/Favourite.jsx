import React, { Component, Fragment } from 'react';
import { Navbar, Container, Card, Row, Col, Button } from 'react-bootstrap';

class Favourite extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='text-center'>
                    <div className='section-title text-center mb-55'>
                        <h2>my favourite items</h2>
                        <p>some of our exclusive collection, you may like</p>
                    </div>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                    <Button className='btn btn-sm'> <i className='fa fa-trash-alt'></i> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                    <Button className='btn btn-sm'> <i className='fa fa-trash-alt'></i> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                    <Button className='btn btn-sm'> <i className='fa fa-trash-alt'></i> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                    <Button className='btn btn-sm'> <i className='fa fa-trash-alt'></i> Remove </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;
