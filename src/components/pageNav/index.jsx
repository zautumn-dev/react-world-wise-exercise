import React from 'react'
import { NavLink } from 'react-router'
import styles from './index.module.css'
import Logo from '../Logo/index.jsx'

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          {/* to 中不从/开始就会拼接到当前路径后边*/}
          <NavLink to="/pricing">PRICING</NavLink>
        </li>
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>

        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav
