import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='text-center'>
                    <div className='section-title text-center mb-55'>
                        <h2>Product collection</h2>
                        <p>some of our exclusive collection, you may like</p>
                    </div>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                <Card.Body>
                                    <p className='product-name-on-card'>realme phone</p>
                                    <p className='product-price-on-card'>price: $150</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='card image-box w-100'>
                                <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
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

export default Collection;
