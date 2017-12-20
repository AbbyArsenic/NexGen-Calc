import React from 'react';
import { BrowserRouter, Route, Switch, /* Link, NavLink */ } from 'react-router-dom';

import Header from '../components/Header.js';
import HomePage from '../components/HomePage';
import SignUpPage from '../components/SignUpPage';
import TermsOfService from '../components/TermsOfService';

import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/SignUpPage" component={SignUpPage} />
                <Route path="/TermsOfService" component={TermsOfService} />


                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
