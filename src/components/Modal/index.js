
import React from "react";
import styles from './styles.module.scss';
 
const Modal = ({closeModal, children}) => {
    const handleCloseClick = () => {
        closeModal();
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { children }
                <button className={styles.close} type="button" onClick={handleCloseClick}>x</button>
            </div>
        </div>
    )
}

export default Modal;
