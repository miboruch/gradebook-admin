import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.searchBar};
  width: 300px;
  height: 40px;
  border: ${({ isDarkTheme }) => (isDarkTheme ? '1px solid #555' : 'none')};
  position: relative;
  margin-top: 2rem;
  padding: 0 1rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 550px;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 500px;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  transition: all 0.4s ease;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const SelectMenu = ({ data, onChange, name, areCourses }) => {
  return (
    <StyledWrapper>
      <Select onChange={onChange} name={name}>
        <option value={null} selected disabled hidden>
          Wybierz
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
};

SelectMenu.propTypes = {
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  areCourses: PropTypes.bool
};

SelectMenu.defaultProps = {
  areCourses: false
};

export default SelectMenu;
