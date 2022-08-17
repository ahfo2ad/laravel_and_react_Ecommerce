import React, { Component, Fragment } from 'react';
// import { Route, Switch} from "react-router";
// import { Route, Router, Switch } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PurchasePage from '../pages/PurchasePage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<UserLoginPage />} />
                    <Route path='/contact' element={<ContactPage />} />

                    <Route path='/purchase' element={<PurchasePage />} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;
