import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { AuthContext } from '../store/AuthContext'

function Modal(props) {
  const { onCloseModal, modalIsOpen } = useContext(AuthContext)

  if(!modalIsOpen){
    return null
  }
  return ReactDom.createPortal(
    <div>
      <div>
        <button 
          onClick={onCloseModal}
        >
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal