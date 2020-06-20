import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StyledCheckbox = styled.input`
  border-radius: 50%;
  opacity: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  -moz-appearance: initial;
  border: 1px solid #000;
  margin-right: 2rem;
  background-color: transparent;

  &:checked::after {
    background-color: yellow;
  }
`;

export { CheckboxWrapper, StyledCheckbox };
