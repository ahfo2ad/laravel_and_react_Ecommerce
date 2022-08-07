import React, { Component, Fragment } from 'react';
// import {Router, Route, Switch} from "react-router";
// import { Route, Switch } from "react-router";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import HomePage from '../pages/HomePage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>

            </Fragment>
        );
    }
}

export default AppRoute;
