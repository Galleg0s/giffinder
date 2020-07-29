import React from 'react';
import styles from './styles.module.scss';

const Modal = ({isOpen, toggleModal, children}) => {
    const handleCloseClick = () => {
        toggleModal();
    }

    return isOpen && (
        <div>
            { children }
            <button type="button" onClick={handleCloseClick}>+</button>
        </div>
    )
}

export default Modal;
