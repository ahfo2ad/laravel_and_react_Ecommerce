import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export class Refund extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='p-2'>
                        <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                            <h4 className='section-title-login'>Refund Page</h4>
                            <p className='section-title-contact'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Refund;
