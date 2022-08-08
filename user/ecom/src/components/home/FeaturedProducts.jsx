import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class FeaturedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='text-center'>
                    <div className='section-title text-center mb-55'>
                        <h2>Featured Product</h2>
                        <p>some of our exclusive collection, you may like</p>
                    </div>
                    <Row>
                        <Col></Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProducts;
