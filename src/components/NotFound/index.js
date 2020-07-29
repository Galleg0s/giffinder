import React from 'react';
import Sorry from '../../images/sorry.gif';
import styles from './styles.module.scss';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div>
                We're sorry, but we couldn't find images for this request. 
                Change the entered subject and try again.
            </div>
            <img src={Sorry} alt="Sorry, really" width="373" height="373"/>
        </div>
    )
}

export default NotFound;