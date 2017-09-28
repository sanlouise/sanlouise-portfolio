// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ toggleFilter, options }) => {
  const { showReact, showRails} = options;

  return (
    <div className="options">
      <div className="col s8 offset-s2 m4 offset-m4 center category-picker">
        <h4>Filter Projects</h4>
        <input
          checked={showReact}
          onChange={() => toggleFilter('showReact')}
          type="checkbox"
          value="react"
          id="react-checkbox"
        />
        <label htmlFor="react-checkbox">React/Redux</label>

        <input
          checked={showRails}
          onChange={() => toggleFilter('showRails')}
          type="checkbox"
          value="rails"
          id="rails-checkbox"
        />
        <label htmlFor="rails-checkbox">Rails</label>

      </div>

    </div>
  );
};

Options.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  options: PropTypes.shape({
    showReact: PropTypes.bool.isRequired,
    showRails: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Options;
