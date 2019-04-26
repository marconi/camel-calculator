import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  itemLabel: {
    display: 'inline-block',
    margin: '0 20px 0 7px',
  },
};

const RadioField = ({ label, name, value, options }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      {options.map(option => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={value === option.value}
          />
          <span style={styles.itemLabel}>{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

RadioField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default RadioField;
