import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import './Signup.css';
import Button from '../common/Button';


class SignUp extends Component {
  state = {
    errorMessage: null
  }

  signUp = this.signUp.bind(this)

  handleChange = this.handleChange.bind(this)

  signUp(e) {
    e.preventDefault();
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

  handleChange(e) {
    this.setState({ [e.target.className]: e.target.value });
  }

  render() {
    const { errorMessage } = this.state;
    const { updateAppState } = this.props;

    return (
      <div className="SignUp">
        <header className="SignUp-header" />
        Account SignUp
        <form onSubmit={this.signUp}>
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
            Sign Up
          </Button>
        </form>
        <div>{errorMessage}</div>
        <div>
          Already have an Account?
          <Button
            type="click"
            onClick={ () => { updateAppState({logIn: true}) } }
          >
            LogIn
          </Button>
        </div>
      </div>

    );
  }
}

SignUp.propTypes = {
  updateAppState: PropTypes.func.isRequired,
};

export default SignUp;
