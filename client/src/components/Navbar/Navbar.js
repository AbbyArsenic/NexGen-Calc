import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
  return(
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <Link to={'/'}>
            <div className="navbar-brand">
              NexGen Calc
            </div>
          </Link>
        </div>

        <ul className="nav navbar-nav" id="navHide">
        <li>
          <NavLink to="/FlightPlan" 
            activeClassName="is-active"
            id="navHide">Flight Plan
          </NavLink>
        </li>
        <li>
          <NavLink to="/TOLDreview" 
            activeClassName="is-active"
            id="navHide">TOLD Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/TOLD-Card" 
            activeClassName="is-active" 
            id="navHide">TOLD Card
          </NavLink>
        </li>            
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to="/Login" activeClassName="is-active">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
