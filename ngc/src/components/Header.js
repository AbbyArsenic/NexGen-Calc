import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return(
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">NexGen Calc</a>
        </div>
        <ul class="nav navbar-nav">
          
        <li>
          <NavLink to="/TermsOfService" 
            activeClassName="is-active">ToS
          </NavLink>
        </li>
        <li>
          <NavLink to="/FlightPlan" 
            activeClassName="is-active">Flight Plan
          </NavLink>
        </li>
        <li>
          <NavLink to="/TakeOffData" 
            activeClassName="is-active">Take Off Data
          </NavLink>
        </li>
        <li>
          <NavLink to="/LandingData" 
            activeClassName="is-active">Landing Data
          </NavLink>
        </li>
        <li>
          <NavLink to="/TOLD-Card" 
            activeClassName="is-active">TOLD Card
          </NavLink>
        </li>            
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <NavLink to="/SignUp" activeClassName="is-active">
              <span class="glyphicon glyphicon-user"></span> Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/Login" activeClassName="is-active">
              <span class="glyphicon glyphicon-log-in"></span> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
