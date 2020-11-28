import React from 'react'
import ReactDom from 'react-dom'

function Modal(props) {
  if(!props.IsOpen){
    return null
  }
  return ReactDom.createPortal(
    <div>
      <div>
        <button 
          onClick={props.OnCloseModal}
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