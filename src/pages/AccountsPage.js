import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/mainActions';
import Spinner from '../components/Spinner/Spinner';
import AccountTable from '../components/tables/AccountTable';
import { Link } from 'react-router-dom';
import DeleteBox from '../components/DeleteBox/DeleteBox';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StyledHeading = styled.h1`
  font-size: 34px;
  color: #2d2d2d;
`;

const AccountsLink = styled(Link)`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #2eae83;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;

  ${({ theme }) => theme.mq.tablet} {
    width: 350px;
    right: 0;
    left: auto;
  }
`;

const AccountsPage = ({ accounts, isLoading, fetchAllUsers }) => {
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <StyledWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <StyledHeading>Zarządzaj</StyledHeading>
          <AccountTable data={accounts} setDeleteOpen={setDeleteOpen} />
          <AccountsLink to={'/'}>Strona główna</AccountsLink>
          <DeleteBox isOpen={isDeleteOpen} setOpen={setDeleteOpen} />
        </>
      )}
    </StyledWrapper>
  );
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
