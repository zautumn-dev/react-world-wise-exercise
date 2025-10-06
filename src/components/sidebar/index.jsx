import React from 'react'
import styles from './index.module.css'
import Logo from '../Logo/index.jsx'
import AppNav from '../appNav/index.jsx'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  )
}

export default Sidebar
