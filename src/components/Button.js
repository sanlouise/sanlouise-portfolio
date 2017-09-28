import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ formInfo }) => (
  <button
    onClick={() => { console.log(formInfo)}}
    className="btn btn-default"
  >
    Get in Touch
  </button>
);

Button.propTypes = {
  formInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired,
}

export default Button;
