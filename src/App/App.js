import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Main from '../Main/Main';
import NavBar from '../common/NavBar';

class App extends Component {
  state = {
    logIn: 'LOGIN',
  }

  updateAppState = this.updateAppState.bind(this)

  updateAppState(props) {
    this.setState(props);
  }

  render() {
    const { logIn } = this.state;
    return (
      <div>
        <NavBar logIn={logIn} />
        {
          (logIn === 'MAIN')
            ? (
              <Main />

            ) : ''
        }
        {
          (logIn === 'LOGIN')
            ? (
              <Login updateAppState={this.updateAppState} />

            ) : ''
        }
        {
          (logIn === 'SIGNUP')
            ? (
              <Signup updateAppState={this.updateAppState} />

            ) : ''
        }
      </div>
    );
  }
}

export default App;
