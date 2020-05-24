import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as TableStyles from '../../style/tableStyles';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ban.svg';
import Table from './Table';
import { deleteUser, setDeleteUser } from '../../actions/mainActions';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 25px;
  height: 25px;
  fill: tomato;
  cursor: pointer;
`;

const AccountTable = ({ data, setDeleteOpen, setDeleteUser, deleteUser }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'userId'
      },
      {
        Header: 'Imię',
        accessor: 'name'
      },
      {
        Header: 'Nazwisko',
        accessor: 'lastName'
      },
      {
        Header: 'Numer albumu',
        accessor: 'albumNo'
      },
      {
        Header: 'Usuń',
        id: 'delete',
        Cell: ({ row: { values } }) => {
          return (
            <StyledDeleteIcon
              onClick={() => {
                setDeleteOpen(true);
                setDeleteUser(values);
              }}
            />
          );
        }
      }
    ],
    []
  );
  return <StyledWrapper>{data && <Table data={data} columns={columns} />}</StyledWrapper>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userID) => dispatch(deleteUser(userID)),
    setDeleteUser: (userID) => dispatch(setDeleteUser(userID))
  };
};

AccountTable.propTypes = {
  data: PropTypes.array.isRequired,
  setDeleteOpen: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AccountTable);
