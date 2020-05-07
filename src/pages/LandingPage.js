import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from '../components/Input/Input';
import LoginScene from '../components/LoginScene/LoginScene';
import { addUserInputs } from '../utils/addUserInputs';
import Checkbox from '../components/Checkbox/Checkbox';
import SelectMenu from '../components/SelectMenu/SelectMenu';

const StyledWrapper = styled.section`
  width: 90%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 0 2rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

const StyledHeading = styled.h1`
  font-size: 52px;
  letter-spacing: 1px;
  color: #2d2d2d;
`;

const StyledButton = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 3rem;
  border: none;
  background-color: #2eae83;
  color: #fff;
  font-family: 'Gilroy';
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
`;

const LandingPage = () => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          albumNumber: '',
          isAdmin: false,
          universityId: 0,
          login: '',
          password: '',
          course: ''
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleBlur, errors }) => {
          const userInputs = addUserInputs(values, errors);
          return (
            <StyledForm>
              <StyledHeading>Dodaj użytkownika</StyledHeading>
              {userInputs.map((item) => (
                <Input
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  type={item.type}
                  value={item.value}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              ))}
              <Checkbox />
              <SelectMenu />
              <StyledButton>Submit</StyledButton>
            </StyledForm>
          );
        }}
      </Formik>
      <LoginScene />
    </StyledWrapper>
  );
};

export default LandingPage;
