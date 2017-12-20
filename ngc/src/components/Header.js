import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>NexGen Calc</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>| Home Page |</NavLink>
            <NavLink to="/SignUpPage" activeClassName="is-active">| Sign Up |</NavLink>
            <NavLink to="/TermsOfService" activeClassName="is-active">| ToS |</NavLink>
        </header>
    );
};

export default Header;
