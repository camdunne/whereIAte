import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick, type }) => (
  <button
    type={type}
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'submit',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
