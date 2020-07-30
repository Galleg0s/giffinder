import React from 'react';
import styles from './styles.module.scss';

const Modal = ({closeModal, children}) => {
    const handleCloseClick = () => {
        closeModal();
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                { children }
            </div>
            <button className={styles.closeButton} type="button" onClick={handleCloseClick}>+</button>
        </div>
    )
}

export default Modal;
