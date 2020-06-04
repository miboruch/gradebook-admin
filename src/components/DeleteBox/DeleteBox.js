import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';
import { deleteUser, setDeleteUser } from '../../actions/mainActions';

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

const DeleteBox = ({ isOpen, setOpen, deleteUser, deleteUserAction, setDeleteUser }) => {
  const wrapperRef = useRef(null);
  const boxRef = useRef(null);
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'Power3.inOut' } }));

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const box = boxRef.current;

    gsap.set([wrapper, box], { autoAlpha: 0 });

    tl.to(wrapper, { autoAlpha: 1, duration: 0.5 }).fromTo(
      box,
      { y: '+=30' },
      { y: '0', autoAlpha: 1, duration: 0.5 }
    );
  }, []);

  useEffect(() => {
    isOpen ? tl.play() : tl.reverse();
  }, [isOpen]);

  return (
    <StyledWrapper ref={wrapperRef}>
      <DeleteBoxWrapper ref={boxRef}>
        <CloseButton setBoxState={setOpen} />
        {deleteUser && (
          <>
            <StyledParagraph>
              Jesteś pewny że chcesz usunąć konto{' '}
              <strong>
                {deleteUser.name} {deleteUser.lastName}
              </strong>
              ?
            </StyledParagraph>
            <ButtonWrapper>
              <StyledSubmitButton
                onClick={() => {
                  deleteUserAction(deleteUser.userId);
                  setOpen(false);
                }}
              >
                TAK
              </StyledSubmitButton>
              <StyledCancelButton
                onClick={() => {
                  setDeleteUser(null);
                  setOpen(false);
                }}
              >
                NIE
              </StyledCancelButton>
            </ButtonWrapper>
          </>
        )}
      </DeleteBoxWrapper>
    </StyledWrapper>
  );
};

DeleteBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

const mapStateToProps = ({ mainReducer: { deleteUser } }) => {
  return { deleteUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserAction: (userID) => dispatch(deleteUser(userID)),
    setDeleteUser: (userID) => dispatch(setDeleteUser(userID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBox);
