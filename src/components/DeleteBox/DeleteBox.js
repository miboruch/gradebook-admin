import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';
import { deleteUser, setDeleteUser } from '../../actions/mainActions';
import {
  StyledWrapper,
  DeleteBoxWrapper,
  StyledParagraph,
  StyledCancelButton,
  StyledSubmitButton,
  ButtonWrapper
} from './DeleteBox.styles';

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
