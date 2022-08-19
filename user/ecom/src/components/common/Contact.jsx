import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Validation from '../../Validation/Validation';
import axios from 'axios';
import AppURL from '../../api/AppURL';

export class Contact extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            message:""
        }
    }

    nameOnChange =(event)=> {
        let name = event.target.value;
        this.setState({ name :name});
        // alert(name);
    }

    emailOnChange = (event) => {
        let email = event.target.value;
        this.setState({ email: email });
        // alert(email);
    }

    messageOnChange = (event) => {
        let message = event.target.value;
        this.setState({ message: message });
        // alert(message);
    }

    onFormSubmit = (event) => {
        // alert("hi");
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let sendBtn = document.getElementById('sendBtn');
        let formContact = document.getElementById('formContact');

        if (name.length ==0) {
            alert("name can't be empty")
        }
        else if (email.length == 0) {
            alert("email can't be empty")
        }
        else if (message.length == 0) {
            alert("message can't be empty")
        }
        else if (!(Validation.NameRegix).test(name)) {
            alert("invalid name");
        }
        else {
            sendBtn.innerHTML = "Sending...";
            let MyFormData = new FormData();
            MyFormData.append("name", name)
            MyFormData.append("email", email)
            MyFormData.append("message", message)

            axios.post(AppURL.PostContact,MyFormData)
                .then(function (response) {
                    if(response.status == 200 && response.data == 1) {
                        alert("message sent successfully");
                        sendBtn.innerHTML = "Send";
                        formContact.reset();
                    }
                    else {
                        alert("error!");
                        sendBtn.innerHTML = "Send";
                    }
                })
                .catch(function (error) {
                    alert(error);
                    sendBtn.innerHTML = "Send";
                });
        }

        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='p-2'>
                        <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                            <Row className='text-center w-100 align-items-center'>
                                <Col className='d-flex justify-content-center' xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form id='formContact' onSubmit={this.onFormSubmit} className='onboardForm'>
                                        <h4 className='section-title-login'>CONTACT WITH US</h4>
                                        <h4 className='section-sub-title'>Please Contact Us</h4>
                                        <input onChange={this.nameOnChange} className='form-control m-2' type="text" placeholder='enter your name' />
                                        <input onChange={this.emailOnChange} className='form-control m-2' type="email" placeholder='enter your email' />
                                        <Form.Control onChange={this.messageOnChange} className='form-control m-2' placeholder='Message' as="textarea" rows={3} />
                                        <Button id='sendBtn' type='submit' className='site-btn-login btn btn-block m-2'>Send</Button>
                                    </Form>
                                </Col>
                                <Col className='p-0 m-0 Desktop' lg={6} md={6} sm={6} xs={6}>
                                    <p className='section-title-contact'> 112 7ay-Elgam3a Mansoura-Egypt</p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27024233004!2d-73.70018409439162!3d40.69767172779878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1660736014325!5m2!1sar!2seg" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
