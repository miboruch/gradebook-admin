import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDeleteUser } from '../../actions/mainActions';

const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0 0.5rem;
  z-index: 10;

  :focus {
    outline: none;
  }
`;

const InnerButton = styled.div`
  position: relative;
  ::before,
  ::after {
    content: '';
    width: 24px;
    height: 1px;
    background: #2d2d2d;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
    top: 0;
  }
  ::before {
    transform: rotate(40deg);
  }
  ::after {
    transform: rotate(-40deg);
  }
`;

const CloseButton = ({ setBoxState, setDeleteUser }) => {
  return (
    <ButtonWrapper
      type='button'
      onClick={() => {
        setBoxState(false);
        setDeleteUser(null);
      }}
    >
      <InnerButton />
    </ButtonWrapper>
  );
};

CloseButton.propTypes = {
  setBoxState: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDeleteUser: (userID) => dispatch(setDeleteUser(userID))
  };
};

export default connect(null, mapDispatchToProps)(CloseButton);
