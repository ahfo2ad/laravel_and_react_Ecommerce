import React, { Component, Fragment } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from "../../assets/images/easyshop.png"
import { Link } from "react-router-dom";
import MegaMenuMobile from '../home/MegaMenuMobile';
class NavMenuMobile extends Component {

    constructor() {
        super();
        this.state = {
            sideNavState: "sideNavClose",
            contentOverState: "ContentOverlayClose" 
        }
    }

    menuBarClickHandler=()=> {
        this.sideNavClickHandler();
    }

    ContentOverlayClickHandler=()=> {
        this.sideNavClickHandler();
    }

    sideNavClickHandler=()=> {
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
                    <Container fluid className='fixed-top shadow-sm p-2 mb-0 bg-white'>
                        <Row className='fixpos align-items-center'>
                            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Button className='btn' onClick={this.menuBarClickHandler}>
                                    <i className='fa fa-bars'></i>
                                </Button>
                                <Link to={"/"}><img className='nav-logo' src={Logo} /></Link>
                                <Button className='cart-btn'>
                                    <i className='fa fa-shopping-cart'></i> 3 Items
                                </Button>
                            </Col>

                            
                        </Row>
                    </Container>
                    <div className={this.state.sideNavState}>
                        <MegaMenuMobile />
                    </div>
                    <div className={this.state.contentOverState} onClick={this.ContentOverlayClickHandler}>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NavMenuMobile;
