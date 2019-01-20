import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';
import './RestaurantListEntry.css';

class RestaurantListEntry extends Component {
  state = {
    restaurant: null,
  }

  componentDidMount() {
    const { rid } = this.props;

    firebase.database().ref(`/restaurants/${rid}`).once('value')
      .then((snapshot) => {
        this.setState({ restaurant: snapshot.val() || {} });
      });
  }

  render() {
    const restaurant = Object.assign({}, this.state.restaurant, this.props.restaurant);

    if (restaurant) {
      return (
        <div className="App">
          {Object.keys(restaurant).map((key) => {
            if (key === 'menu') {
              return <div key={key}> MENU </div>;
            }
            return (
              <div key={key}>
                {restaurant[key]}
              </div>
            );
          })}
        </div>
      );
    }
    return (<div />);
  }
}
RestaurantListEntry.propTypes = {
  rid: PropTypes.string.isRequired,
};
export default RestaurantListEntry;
