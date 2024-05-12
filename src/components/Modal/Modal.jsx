import './Modal.css'
import React from 'react'
import { SecondaryButton } from '../Buttons/Buttons';

const Modal = ({ isOpen, onClose, onSubmit, submitBtnName, children }) => {

    if (!isOpen) return null;

    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <div className='modal-children'>
                    {children}
                </div>
                <div className='modal-btn'>
                    <div className='close-button'>
                        <SecondaryButton onClick={onClose}>close</SecondaryButton>
                    </div>
                    <div className='submit-button'>
                        <SecondaryButton onClick={onSubmit}>{submitBtnName}</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal