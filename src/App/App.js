import React, { Component } from 'react';
import firebase from '../firebase';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
    user: null,
    collections: null,

  };

  componentDidMount() {
    const userId = '1';
    firebase.database().ref(`/users/${userId}`).once('value').then((snapshot) => {
      this.setState({ user: snapshot.val() });
    });
    firebase.database().ref(`/collections/uid${userId}`).once('value').then((snapshot) => {
      this.setState({ collections: snapshot.val() });
    });
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header" />
        CollectionList

      </div>
    );
  }
}

export default App;
