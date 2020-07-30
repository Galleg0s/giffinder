import React from 'react'
import styles from './styles.module.scss'
import { Button } from '../../ui';

const Navigation = ({ onButtonClick, offset }) => {
    const handleButtonClick = (e) => {
        let direction = e.target.value;
        onButtonClick(direction);
    }
    const isFirstPage = offset === 0;

    return (
        <div className={styles.container}>
            <Button
                disabled={isFirstPage}
                type="button"
                value="prev"
                onClick={handleButtonClick}
            >
                Prev
          </Button>
            <Button
                type="button"
                value="next"
                onClick={handleButtonClick}
            >
                Next
          </Button>
        </div>
    )
}

export default Navigation;