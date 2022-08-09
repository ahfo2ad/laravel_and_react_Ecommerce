import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

    constructor(props) {
        super(props);
        this.next     = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }



    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container fluid className='text-center'>
                    <div className='section-title text-center mb-55'>
                        <h2>new arrival &nbsp;
                            <a className='btn btn-sm ml-2 mx-1 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                            <a className='btn btn-sm ml-2 mx-1 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></a>
                        </h2>
                        <p>some of our exclusive collection, you may like</p>
                    </div>
                    <Row>
                        <Slider ref={c => (this.slider=c)} {...settings}>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='card image-box w-100'>
                                    <img className='center w-75' src="https://images-na.ssl-images-amazon.com/images/I/61K8lMf1QnL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>realme phone</p>
                                        <p className='product-price-on-card'>price: $150</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;
