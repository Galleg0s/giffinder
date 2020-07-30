import React from 'react'
import { Modal } from '../../ui';
import styles from './styles.module.scss'

const Lightbox = ({ item, onCloseBtnClick }) => {
    const closeModal = () => {
        onCloseBtnClick();
    }

    return (
        <Modal closeModal={closeModal}>
            <img
                className={styles.image}
                src={item.images.original.url}
                alt={item.title}
                title={item.title}
            />
        </Modal>
    )
}

export default Lightbox 