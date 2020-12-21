import React, { useContext, } from 'react'
import ReactDom from 'react-dom'
import { AuthContext } from '../../store/AuthContext'
import {
  ModalContainer,
  ButtonContainer,
  ButtonClose,
} from './ModalStyles'

function Modal(props) {
  const { onCloseModal, modalIsOpen, } = useContext(AuthContext)

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