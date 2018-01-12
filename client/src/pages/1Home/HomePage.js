import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons';

class HomePage extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-sm-offset-1 contentPanel">
        <div>
          <h1>NexGen Calculation</h1>
          <h2>Cessna 172SP</h2>
          <hr />
        </div>
        <div>
          <h3>Welcome! We're here to help streamline your pre-flight preparations</h3>
          <p>Please log in or sign up to continue.</p>
          <Link to={"/SignUp"} >
            <Button text="Sign Up" />
          </Link>
          <Link to={"/Login"}>
            <Button text="Log In" />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
