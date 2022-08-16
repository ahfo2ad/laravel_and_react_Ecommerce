import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterMobile extends Component {
    render() {
        return (
            <Fragment>
                <div className='footerback m-0 mt-5 pt-4 py-4 shadow-sm'>
                    <Container className='text-center'>
                        <Row className='px-0'>
                            <Col lg={3} md={3} sm={6} xs={12}>
                                <h5 className='footer-menu-title text-uppercase'>office address</h5>
                                <p>Location Address</p>
                                <p>Eamil: ahfouad12@gmail.com</p>
                                <h5 className='footer-menu-title'>social links</h5>
                                <a href="#"><i className='fab fa-facebook m-1 h4'></i></a>
                                <a href="#"><i className='fab fa-instagram m-1 h4'></i></a>
                                <a href="#"><i className='fab fa-twitter m-1 h4'></i></a>
                            </Col>
            
                            <Col lg={3} md={3} sm={6} xs={12}>
                                <h5 className='footer-menu-title text-uppercase'>download apps</h5>
                                <a href='#'><img src={Apple} /></a>
                                <a href='#'><img className='mx-2' src={Google} /></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FooterMobile;
