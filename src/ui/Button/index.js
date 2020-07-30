import React from 'react'
import styles from './styles.module.scss'

const Button = ({ disabled, value, type = 'button', onClick, children }) => {
  return (
    <div className={styles.container}>
      <button
        disabled={disabled}
        className={styles.button}
        type={type}
        value={value}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button;