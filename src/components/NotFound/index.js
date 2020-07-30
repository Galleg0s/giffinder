import React from 'react';
import Sorry from '../../images/sorry.gif';
import styles from './styles.module.scss';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Oops!</p>
            <div className={styles.text}>
                We're sorry, but we couldn't find images for this request. <br />
                Change the entered subject and try again.
            </div>
            <img src={Sorry} alt="Sorry, really" width="200" height="200"/>
        </div>
    )
}

export default NotFound;