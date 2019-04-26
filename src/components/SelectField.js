import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({ name, label, value, options }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <select name={name} defaultValue={value}>
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

SelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default SelectField;
