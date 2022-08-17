import React, { Component, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from "../../assets/images/easyshop.png"
import { Link } from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';
class NavMenuDesktop extends Component {

    constructor() {
        super();
        this.state = {
            sideNavState: "sideNavClose",
            contentOverState: "ContentOverlayClose"
        }
    }

    menuBarClickHandler = () => {
        this.sideNavClickHandler();
    }

    ContentOverlayClickHandler = () => {
        this.sideNavClickHandler();
    }

    sideNavClickHandler = () => {
        let sideNavState = this.state.sideNavState;
        let contentOverState = this.state.contentOverState;
        if (sideNavState === "sideNavOpen") {
            this.setState({
                sideNavState: "sideNavClose",
                contentOverState: "ContentOverlayClose"
            })
        }
        else {
            this.setState({
                sideNavState: "sideNavOpen",
                contentOverState: "ContentOverlayOpen"
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className='TopSectionDown'>
                    <Navbar className='navbar' fixed={"top"} bg="light">
                        <Container fluid className='fixed-top shadow-sm p-2 mb-0 bg-white'>
                            <Row className='fixpos align-items-center'>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Button className='btn' onClick={this.menuBarClickHandler}>
                                        <i className='fa fa-bars'></i>
                                    </Button>
                                    <Link to={"/"}><img className='nav-logo' src={Logo} /></Link>
                                </Col>

                                <Col className='p-1' xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <div className='input-group w-100'>
                                        <input type="text" className='form-control' />
                                        <Button type="button" className='btn site-btn'>
                                            <i className='fa fa-search'></i>
                                        </Button>
                                    </div>
                                </Col>

                                <Col className='p-1' xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Link to={"/"} className="btn">
                                        <i className='fa fa-heart h4'></i>
                                        <sup>
                                            <span className='badge text-white bg-danger'>3</span>
                                        </sup>
                                    </Link>
                                    <Link to={"/notification"} className="btn">
                                        <i className='fa fa-bell h4'></i>
                                        <sup>
                                            <span className='badge text-white bg-danger'>5</span>
                                        </sup>
                                    </Link>
                                    <a className='btn'>
                                        <i className='fa fa-mobile-alt h4'></i>
                                    </a>
                                    <Link to={"/login"} className="btn h4"> LOGIN</Link>
                                    <Button className='cart-btn'>
                                        <i className='fa fa-shopping-cart'></i> 3 Items
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
                </div>

                <div className={this.state.sideNavState}>
                    <MegaMenuAll />
                </div>
                <div className={this.state.contentOverState} onClick={this.ContentOverlayClickHandler}>

                </div>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;
