import React from 'react';
import { BrowserRouter, Route, Switch, /* Link, NavLink */ } from 'react-router-dom';

import HomePage from '../pages/1Home';
import SignUpPage from '../pages/2SignUp';
import TermsOfService from '../pages/3TermsOfService';
import NotFoundPage from '../pages/z404Page';
import LoginPage from '../pages/4Login';
import ForgotPassword from '../pages/5ForgotPassword';
import FlightPlan from '../pages/6FlightPlan';
import TakeOffData from '../pages/7TakeOffData';

import Header from '../components/Header.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/SignUp" component={SignUpPage} />
                <Route path="/TermsOfService" component={TermsOfService} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/FlightPlan" component={FlightPlan} />
                <Route path="/TakeOffData" component={TakeOffData} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


                

export default AppRouter;
