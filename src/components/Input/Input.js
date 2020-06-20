import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, StyledLabel } from './Input.styles';

const Input = ({ type, value, name, handleChange, handleBlur, placeholder, error, disabled }) => {
  return (
    <InputWrapper disabled={disabled}>
      <StyledLabel htmlFor={name}>{error}</StyledLabel>
      <StyledInput
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={disabled ? null : value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputWrapper>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool
};

export default Input;
