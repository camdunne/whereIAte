import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Main from '../Main/Main';

class App extends Component {
  state = {
    logIn: true,
    isLoggedIn: false,
  }

  updateAppState = this.updateAppState.bind(this)

  updateAppState(props) {
    this.setState(props);
  }

  render() {
    const { logIn, isLoggedIn } = this.state;
    if (isLoggedIn) {
      return (
        <div className="App">
          <Main />
        </div>
      );
    }
    if (logIn) {
      return (
        <div className="App">
          <Login updateAppState={this.updateAppState} />
        </div>
      );
    }
    return (
      <div className="App">
        <Signup updateAppState={this.updateAppState} />
      </div>  
    )
  }
}

export default App;
