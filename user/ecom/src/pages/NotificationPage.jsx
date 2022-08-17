import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Notification from '../components/Notification/Notification';

class NotificationPage extends Component {

    // to sroll to top page while navigating
    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <Fragment>
                <div className='Desktop'>
                    <NavMenuDesktop />
                </div>
                <div className='Mobile'>
                    <NavMenuMobile />
                </div>

                <Notification />

                <div className='Desktop'>
                    <FooterDesktop />
                </div>
                <div className='Mobile'>
                    <FooterMobile />
                </div>
            </Fragment>
        );
    }
}

export default NotificationPage;
