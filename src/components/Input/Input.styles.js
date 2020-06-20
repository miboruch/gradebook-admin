import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 300px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.searchBar};
  border: ${({ isDarkTheme }) => (isDarkTheme ? '1px solid #555' : 'none')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-direction: row;
  border-radius: 20px;
  transition: all 0.4s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ theme }) => theme.mq.tablet} {
    width: 550px;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 500px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 2rem;
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontColor};
  font-family: 'Gilroy';
  &::placeholder {
    font-size: 13px;
    position: absolute;
    color: #c9c9c9;
  }
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  font-size: 10px;
  position: absolute;
  top: -18px;
  left: 2rem;
  color: #ccc;
`;

export { InputWrapper, StyledInput, StyledLabel };
