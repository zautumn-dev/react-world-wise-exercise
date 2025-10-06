import React from 'react'
import styles from './index.module.css'
import Logo from '../Logo/index.jsx'
import AppNav from '../appNav/index.jsx'
import { Outlet } from 'react-router'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  )
}

export default Sidebar
