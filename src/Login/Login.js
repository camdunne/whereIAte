import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import './Login.css';


class Login extends Component {
  state = {}

  signUp = this.signUp.bind(this)

  logIn = this.logIn.bind(this)

  handleChange = this.handleChange.bind(this)

  signUp() {
    const { email, password } = this.state;
    const { updateAppState } = this.props;

    auth.createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value);
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
        if (errorCode === 'auth/user-not-found') {
          this.signUp();
        }
      });
  }

  handleChange(e) {
    this.setState({ [e.target.className]: e.target.value });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="Login">
        <header className="Login-header" />
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
          <input
            type="submit"
            className="submit"
          />
        </form>
        <div>{errorMessage}</div>
      </div>
    );
  }
}

Login.propTypes = {
  updateAppState: PropTypes.func.isRequired,
};

export default Login;
