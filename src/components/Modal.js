import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { AuthContext } from '../store/AuthContext'
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  position: relative;
  top: 4rem;
  width: 400px;
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: ${
    props => props.grayColorOverlay
  };
  padding: 0.5rem 1rem;
  border-radius: 4px;
`; 

function Modal(props) {
  const { onCloseModal, modalIsOpen } = useContext(AuthContext)

  if(!modalIsOpen){
    return null
  }
  return ReactDom.createPortal(
    <ModalContainer>
      <ButtonContainer>
        <ButtonClose
          onClick={onCloseModal}
        >
          X
        </ButtonClose>
        {props.children}
      </ButtonContainer>
    </ModalContainer>,
    document.getElementById('modal')
  )
}

export default Modal