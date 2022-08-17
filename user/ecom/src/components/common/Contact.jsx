import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='p-2'>
                        <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                            <Row className='text-center w-100 align-items-center'>
                                <Col className='d-flex justify-content-center' xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form className='onboardForm'>
                                        <h4 className='section-title-login'>USER SIGN IN</h4>
                                        <h4 className='section-sub-title'>Please Enter Your Mobile Number</h4>
                                        <input className='form-control m-2' type="text" placeholder='enter mobile phone' />
                                        <Button className='site-btn-login btn btn-block m-2'>Next</Button>
                                    </Form>
                                </Col>
                                <Col className='p-0 m-0 Desktop' lg={6} md={6} sm={6} xs={6}>
                                    test
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;
