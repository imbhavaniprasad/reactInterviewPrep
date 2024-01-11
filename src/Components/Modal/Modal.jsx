import React,{useState} from 'react'
import "./index.css";
const Modal = () => {
    const [isOpen,setIsOpen]=useState(false);
  return (
    <div className='modal__container'>
        <div className='signup__zone'>
            <button onClick={()=>setIsOpen(!isOpen)}>Sign Up</button>
        </div>
        {isOpen && <div className='modal'>
            <button className='close_modal' onClick={()=>setIsOpen(false)}>X</button>
             <p>Signup Modal</p>
        </div>}
    </div>
  )
}

export default Modal