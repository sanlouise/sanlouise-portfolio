// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div className="form-group">
    <input
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
      className="form-control"
      placeholder={props.placeholder}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  textarea: false,
};

export default Input;
