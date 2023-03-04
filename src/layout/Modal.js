import React from 'react';
import  ReactDOM  from 'react-dom';

const Modal = (props) => {
  return (
  ReactDOM.createPortal(<div
  className='w-screen  h-screen fixed  bg-[rgb(0,0,0,0.4)] indent-9
   text-white top-0 left-0  text-center  '
  >{props.children}</div> , document.getElementById("root-modal"))
  )
}

export default Modal
