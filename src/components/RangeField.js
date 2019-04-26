import React from 'react';
import PropTypes from 'prop-types';

const RangeField = ({ label, value, ...rest }) => (
  <div className="field">
    <label className="label">
      {label}: {value}
    </label>
    <div className="control">
      <input type="range" {...rest} defaultValue={value} />
    </div>
  </div>
);

RangeField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

RangeField.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default RangeField;
