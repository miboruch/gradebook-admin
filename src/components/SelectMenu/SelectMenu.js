import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, Select } from './SelectMenu.styles';

const SelectMenu = ({ data, onChange, name, areCourses, placeholder }) => (
  <StyledWrapper>
    <Select onChange={onChange} name={name}>
      <option value={null} selected disabled hidden>
        {placeholder}
      </option>
      <>
        {areCourses ? (
          <>
            {data.map((item) => (
              <option value={item.id}>{item.course}</option>
            ))}
          </>
        ) : (
          <>
            {data.map((item) => (
              <option value={item.universityId}>{item.universityName}</option>
            ))}
          </>
        )}
      </>
    </Select>
  </StyledWrapper>
);

SelectMenu.propTypes = {
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  areCourses: PropTypes.bool,
  placeholder: PropTypes.string
};

SelectMenu.defaultProps = {
  areCourses: false
};

export default SelectMenu;
