import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import RestaurantList from '../RestaurantList/RestaurantList';

import './CollectionList.css';

const CollectionList = (props) => {
  const { collections } = props;
  if (collections) {
    return (
      <div className="CollectionList">
        {
          Object.keys(collections)
            .map(key => (
              <div key={key}>
                {`Collection Name: ${key}`}
                <RestaurantList
                  restaurants={collections[key]}
                />
              </div>
            ))
        }
        <Button
          onClick={() => {}}
        >
        Add Collection
        </Button>
      </div>
    );
  }
  return (<div />);
};

CollectionList.defaultProps = {
  collections: {},
};

CollectionList.propTypes = {
  collections: PropTypes.object,
};

export default CollectionList;
