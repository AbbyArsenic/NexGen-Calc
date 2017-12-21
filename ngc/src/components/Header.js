import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>NexGen Calc</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>| Home Page |</NavLink>
            <NavLink to="/SignUp" activeClassName="is-active">| Sign Up |</NavLink>
            <NavLink to="/TermsOfService" activeClassName="is-active">| ToS |</NavLink>
            <NavLink to="/Login" activeClassName="is-active">| Login |</NavLink>
            <NavLink to="/ForgotPassword" activeClassName="is-active">| Password Recovery |</NavLink>
        	<NavLink to="/FlightPlan" activeClassName="is-active">| Flight Plan |</NavLink>
        	<NavLink to="/TakeOffData" activeClassName="is-active">| Take Off Data |</NavLink>
        	<NavLink to="/LandingData" activeClassName="is-active">| Landing Data |</NavLink>
        	<NavLink to="/TOLD-Card" activeClassName="is-active">| TOLD Card |</NavLink>
        	
        	<br />
        	<NavLink to="/asdf" activeClassName="is-active">| 404 Page |</NavLink>
        </header>
    );
};

export default Header;
