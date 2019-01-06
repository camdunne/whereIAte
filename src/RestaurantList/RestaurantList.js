import React, { Component } from 'react';
import RestaurantListEntry from '../RestaurantListEntry';
import firebase from '../firebase';
// import './RestaurantList.css';

class RestaurantList extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header" />
        {/* iterate over props.restaurants */}
      </div>
    );
  }
}

export default RestaurantList;
