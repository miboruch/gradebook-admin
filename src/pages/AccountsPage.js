import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/mainActions';
import Spinner from '../components/Spinner/Spinner';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AccountsPage = ({ accounts, isLoading, fetchAllUsers }) => {
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return <StyledWrapper>{isLoading ? <Spinner /> : <></>}</StyledWrapper>;
};

const mapStateToProps = ({ mainReducer: { accounts, isLoading } }) => {
  return { accounts, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
