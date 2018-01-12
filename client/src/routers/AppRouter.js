import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/1Home';
import SignUpPage from '../pages/2SignUp';
import TermsOfService from '../pages/3TermsOfService';
import NotFoundPage from '../pages/z404Page';
import LoginPage from '../pages/4Login';
import ForgotPassword from '../pages/5ForgotPassword';
import FlightPlan from '../pages/6FlightPlan';
import TOLDreview from '../pages/7TOLDreview';
import TOLDCard from '../pages/8TOLDCard';
import Navbar from '../components/Navbar/Navbar.js';

import '../styles/index.css';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div className="container-fluid">
        <Navbar />
        <div className="container mainContainer">
          <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/SignUp" component={SignUpPage} />
            <Route path="/TermsOfService" component={TermsOfService} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/FlightPlan" component={FlightPlan} />
            <Route path="/TOLDreview" component={TOLDreview} />
            <Route path="/TOLD-Card" component={TOLDCard} />  
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
