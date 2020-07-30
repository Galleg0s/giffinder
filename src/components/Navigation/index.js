import React from 'react'
import styles from './styles.module.scss'

const Navigation = ({onButtonClick}) => {
    const handleButtonClick = (e) => {
        let direction = e.target.value;

        onButtonClick(direction);
    }

    return (
        <div className={styles.container}>
          <button className={styles.button} type="button" value="prev" onClick={handleButtonClick}>
              Prev
          </button>
          <button className={styles.button} type="button" value="next" onClick={handleButtonClick}>
              Next
          </button>
        </div>
    )
}

export default Navigation;