import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons';

class HomePage extends React.Component {
  render() {
    return (
      <div className="contentPanel">
        <div>
          <h1>NexGen Calculation</h1>
          <h2>Cessna 172SP</h2>
          <hr />
        </div>
        <div>
          <h3>Welcome! We're here to help streamline your pre-flight preparations</h3>
          <p>Please log in or <Link to={"/SignUp"}>sign up</Link> to continue.</p>
          <div>  
            <Link to={"/Login"}>
              <Button text="Log In" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
