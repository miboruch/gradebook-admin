import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Input from '../components/Input/Input';
import LoginScene from '../components/LoginScene/LoginScene';
import { addUserInputs } from '../utils/addUserInputs';
import Checkbox from '../components/Checkbox/Checkbox';
import SelectMenu from '../components/SelectMenu/SelectMenu';
import { CreateAccountSchema } from '../utils/schemaValidation';

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

  &:focus {
    outline: none;
  }
`;

const LandingPage = ({ isLoading, universities, courses }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          albumNo: '',
          admin: false,
          universityId: null,
          login: '',
          password: '',
          courseId: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={CreateAccountSchema}
      >
        {({ values, handleChange, handleBlur, errors, setFieldValue }) => {
          const userInputs = addUserInputs(values, errors);
          return (
            <StyledForm>
              {isLoading ? (
                <p>spinner</p>
              ) : (
                <>
                  <StyledHeading>Dodaj użytkownika</StyledHeading>
                  {userInputs.map((item) => (
                    <Input
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      type={item.type}
                      value={item.value}
                      name={item.name}
                      error={item.error}
                      placeholder={item.placeholder}
                    />
                  ))}
                  <SelectMenu
                    data={universities}
                    name={'universityId'}
                    onChange={(event) =>
                      setFieldValue('universityId', parseInt(event.target.value))
                    }
                    placeholder={'Uniwersytet'}
                  />
                  <SelectMenu
                    data={courses}
                    areCourses={true}
                    name={'courseId'}
                    onChange={(event) => setFieldValue('courseId', parseInt(event.target.value))}
                    placeholder={'Kierunek'}
                  />
                  <Checkbox handleChange={handleChange} />
                  <StyledButton type={'submit'}>Submit</StyledButton>
                </>
              )}
            </StyledForm>
          );
        }}
      </Formik>
      <LoginScene />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ mainReducer: { isLoading, universities, courses } }) => {
  return { isLoading, universities, courses };
};

export default connect(mapStateToProps)(LandingPage);
