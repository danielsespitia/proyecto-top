import React, { useContext, } from 'react'
import ReactDom from 'react-dom'
import { AuthContext } from '../../store/AuthContext'
import {
  ModalContainer,
  ButtonContainer,
  ButtonClose,
} from './ModalStyles'

function ModalCompanion(props) {
  const { onCloseModal, modalCompanionIsOpen, } = useContext(AuthContext)

  if(!modalCompanionIsOpen){
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

export default ModalCompanion