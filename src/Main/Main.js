import React, { Component } from 'react';
import { firebase, auth } from '../firebase';
import './Main.css';
import CollectionList from '../CollectionList/CollectionList';

class Main extends Component {
  state = {
    collections: null,
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    firebase.database().ref(`/collections/${uid}`).once('value').then((snapshot) => {
      this.setState({ collections: snapshot.val() || {} });
    });
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="Main">
        <CollectionList collections={collections} />
      </div>
    );
  }
}

export default Main;
