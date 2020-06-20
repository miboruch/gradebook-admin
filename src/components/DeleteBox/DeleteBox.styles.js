import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const DeleteBoxWrapper = styled.div`
  width: 90%;
  height: 400px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    width: 500px;
    height: 400px;
  }
`;

const StyledParagraph = styled.p`
  color: #2d2d2d;
  padding: 2rem;
`;

const StyledSubmitButton = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 1.5rem;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #2eae83;
  font-weight: bold;
  color: #2eae83;
  font-family: 'Gilroy';
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const StyledCancelButton = styled(StyledSubmitButton)`
  border-bottom: 1px solid tomato;
  color: tomato;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export {
  StyledWrapper,
  DeleteBoxWrapper,
  StyledParagraph,
  StyledCancelButton,
  StyledSubmitButton,
  ButtonWrapper
};
