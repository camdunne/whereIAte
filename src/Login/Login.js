import React, { Component } from 'react';
import firebase from '../firebase';
import './Login.css';

class Login extends Component {
  state = {
    isLoggedIn: false,
  };

  onClickHandler = this.onClickHandler.bind(this);

  componentDidMount() {
    this.getUserId();
    console.log(firebase.database().ref('/users/'));
    // .ref().then(console.log);
    // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    // });
  }

  onClickHandler() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  getUserId() {
    const userId = firebase.auth().currentUser.uid;
    this.state.userId = userId;
  }


  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <header className="App-header" />

      </div>
    );
  }
}

export default Login;
