import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDeleteUser } from '../../actions/mainActions';
import { ButtonWrapper, InnerButton } from './CloseButton.styles';

const CloseButton = ({ setBoxState, setDeleteUser }) => (
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

CloseButton.propTypes = {
  setBoxState: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDeleteUser: (userID) => dispatch(setDeleteUser(userID))
  };
};

export default connect(null, mapDispatchToProps)(CloseButton);
