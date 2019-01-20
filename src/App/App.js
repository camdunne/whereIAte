import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login';
import Main from '../Main/Main';

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  updateAppState = this.updateAppState.bind(this)

  updateAppState(props) {
    this.setState(props);
  }

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return (
        <div className="App">
          <Main />
        </div>
      );
    }
    return (
      <div className="App">
        <Login updateAppState={this.updateAppState} />
      </div>
    );
  }
}

export default App;
