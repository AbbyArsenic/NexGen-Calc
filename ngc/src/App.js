import React, { Component } from 'react';

import SignUpButton from './Components/SignUpButton';
import LoginButton from './Components/LoginButton';

class App extends Component {
  render() {
    return (
      <div>
        <h1>NexGen Calculation</h1>
        <h2>Cessna C178S</h2>
        <br />
        <h2>Welcome!</h2>
        <SignUpButton />
        <LoginButton />

      </div>
    );
  }
}

export default App;
