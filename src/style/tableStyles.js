import styled from 'styled-components';

export const TableWrapperStyle = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-top: 2rem;
  overflow-y: scroll;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  color: #2d2d2d;
  transition: all 0.4s ease;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-height: 90%;
  padding: 0 1rem;
  position: relative;
  font-size: 14px;
`;

export const StyledTableHeading = styled.th`
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.fontColor};
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  transition: all 0.4s ease;

  &:last-child {
    border-right: 0;
  }
`;

export const StyledTd = styled.td`
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  transition: all 0.4s ease;

  &:last-child {
    border-right: 0;
  }
`;

export const StyledTableRow = styled.tr`
  width: 100%;
  height: 60px !important;
  font-size: inherit;
  font-weight: 400;
  transition: background-color 0.3s ease;
  &:last-child {
    ${StyledTd} {
      border-bottom: 0;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.searchBar};
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.secondFontColor};
  border-radius: 50%;
  position: relative;
`;

export const StyledBold = styled.strong`
  font-weight: 600;
`;

export const BoldGreenFont = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-weight: 600;
`;

export const BoldRedFont = styled(BoldGreenFont)`
  color: #de2620;
`;

export const StyledPositionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  font-size: 9px;
`;
