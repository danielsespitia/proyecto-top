import React from 'react'
import ReactDom from 'react-dom'

function Modal(props) {
  if(!props.isOpen){
    return null
  }
  return ReactDom.createPortal(
    <div>
      <div>
        <button>
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal