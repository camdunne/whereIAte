import React from 'react';
import PropTypes from 'prop-types';
import RestaurantListEntry from '../RestaurantListEntry/RestaurantListEntry';
import './RestaurantList.css';

const RestaurantList = (props) => {
  const { restaurants } = props;

  return (
    <div className="App">
      {
        Object.keys(restaurants)
          .map(key => (
            <RestaurantListEntry
              key={key}
              rid={key}
              restaurant={restaurants[key]}
            />
          ))
      }
    </div>
  );
};

RestaurantList.defaultProps = {
  restaurants: {},
};

RestaurantList.propTypes = {
  restaurants: PropTypes.object,
};

export default RestaurantList;
