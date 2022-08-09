import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MegaMenu from './MegaMenu';
import Slider from './Slider';

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='p-0 m-0 overflow-hidden g-0'>
                    
                    {/* <div className='overflow-hidden'> */}
                    <Row className='gx-0'>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu />
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <Slider />
                        </Col>
                    </Row>
                    {/* </div> */}
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;
