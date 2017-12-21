import React from 'react';
import { Link } from 'react-router-dom';

import { SignUpButton, LoginButton } from '../../components/Buttons';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>NexGen Calculation</h1>
          <hr />
          <h2>Cessna C178S</h2>
        </div>
        <br />
        <h2>Welcome!</h2>
        <Link to={"/SignUp"} >
          <SignUpButton />
        </Link>
        <Link to={"/Login"} >
          <LoginButton />
        </Link>
      </div>
    );
  }
}

export default HomePage;
