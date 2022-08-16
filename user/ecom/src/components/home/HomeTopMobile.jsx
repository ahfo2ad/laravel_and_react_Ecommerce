import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HomeSlider from './HomeSlider';

class HomeTopMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='p-0 m-0 overflow-hidden g-0'>

                    <Row className='p-0 m-0 overflow-hidden gx-0'>
                        
                        <Col lg={12} md={12} sm={12}>
                            <HomeSlider />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTopMobile;
