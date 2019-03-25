import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import './Login.css';
import Button from '../common/Button';


class Login extends Component {
  state = {
    errorMessage: null
  }

  logIn = this.logIn.bind(this)

  handleChange = this.handleChange.bind(this)

  logIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { updateAppState } = this.props;

    auth.signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value.user);
        updateAppState({
          isLoggedIn: true,
          uid: value.user.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        this.setState({ errorMessage });
      });
  }

  handleChange(e) {
    this.setState({ [e.target.className]: e.target.value });
  }


  render() {
    const { errorMessage } = this.state;
    const { updateAppState } = this.props;
  
    return (
      <div className="Login">
        <header className="Login-header" />
        Account Login
        <form onSubmit={this.logIn}>
          <input
            className="email"
            type="text"
            onChange={this.handleChange}
          />
          <input
            className="password"
            type="text"
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            className="submit"
          >
            Log In
          </Button>
        </form>
        <div>{errorMessage}</div>
        <div>
          Do you need an Account?
          <Button
            type="click"
            onClick={ () => { updateAppState({logIn: false}) } }
          >
            Sign Up
          </Button>
        </div>
      </div>

    );
  }
}

Login.propTypes = {
  updateAppState: PropTypes.func.isRequired,
};

export default Login;
