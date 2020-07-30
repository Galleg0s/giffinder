import React from 'react'
import LoaderIcon from '../../images/loader.svg'
import styles from './styles.module.scss'

const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={LoaderIcon} alt="Loading..." title="Loader" />
        </div>
    )
}

export default Loader;
