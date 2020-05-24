import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as TableStyles from '../../style/tableStyles';
import { ReactComponent as DeleteIcon } from '../../assets/icons/ban.svg';
import Table from './Table';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 25px;
  height: 25px;
  fill: tomato;
  cursor: pointer;
`;

const AccountTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID użytkownika',
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
        Cell: () => <StyledDeleteIcon />
      }
    ],
    []
  );
  return <StyledWrapper>{data && <Table data={data} columns={columns} />}</StyledWrapper>;
};

AccountTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default AccountTable;
