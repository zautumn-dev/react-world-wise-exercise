import React from 'react'
import styles from './Button.module.css'

function Button({ children, type, handler }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={handler}>
      {children}
    </button>
  )
}

export default Button
