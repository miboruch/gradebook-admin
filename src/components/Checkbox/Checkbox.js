import React from 'react';
import { CheckboxWrapper, StyledCheckbox } from './Checkbox.styles';

const Checkbox = ({ handleChange }) => (
  <CheckboxWrapper>
    <StyledCheckbox type='checkbox' name='admin' onChange={handleChange} />
    <label htmlFor={'admin'}>admin</label>
  </CheckboxWrapper>
);

export default Checkbox;
