import React from 'react';
import PropTypes from 'prop-types';

import RangeField from './RangeField';
import SelectField from './SelectField';
import RadioField from './RadioField';

const Form = ({
  data,
  hairColorOptions,
  hairLengthOptions,
  eyeColorOptions,
  beardOptions,
  bodyOptions,
  onSubmit,
  onChange,
}) => (
  <form onChange={onChange}>
    <RangeField
      name="older"
      label="Older"
      min={14}
      max={70}
      value={data.older}
    />
    <RangeField
      name="size"
      label="Size (cm)"
      min={140}
      max={220}
      value={data.size}
    />
    <SelectField
      name="hairColor"
      label="Hair colour"
      options={hairColorOptions}
      value={data.hairColor}
    />
    <RadioField
      name="hairLength"
      label="Hair length"
      options={hairLengthOptions}
      value={data.hairLength}
    />
    <RadioField
      name="eyeColor"
      label="Eye color"
      options={eyeColorOptions}
      value={data.eyeColor}
    />
    <RadioField
      name="beard"
      label="Beard"
      options={beardOptions}
      value={data.beard}
    />
    <RadioField
      name="body"
      label="Body"
      options={bodyOptions}
      value={data.body}
    />
  </form>
);

Form.propTypes = {
  data: PropTypes.shape({
    older: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired,
    hairLength: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired,
    beard: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  hairColorOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  hairLengthOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  eyeColorOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  beardOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  bodyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
