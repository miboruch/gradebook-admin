import styled from 'styled-components';

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

export { StyledWrapper, Select };
