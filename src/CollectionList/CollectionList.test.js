import React from 'react';
import ReactDOM from 'react-dom';
import CollectionList from './CollectionList';

const collections = {
  'restaurant1': {
    rating: 3, 
    address: '',
    name: 'one'
  },
  'restaurant2': {
    rating: 5,
    address: '',
    name: 'two'
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollectionList collections={collections} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
