import React from 'react'
import { Link, NavLink } from 'react-router'
import styles from './index.module.css'
import Logo from '../Logo/index.jsx'

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>

      <ul>
        <li>
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
