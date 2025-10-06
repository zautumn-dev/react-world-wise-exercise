import React from 'react'
import styles from './index.module.css'
import { Link, NavLink } from 'react-router'

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {/* to 中不从/开始就会拼接到当前路径后边*/}
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav
