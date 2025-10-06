import React from 'react'
import { Link } from 'react-router'
import styles from './cityItem.module.css'
import { formatDate } from '../../../lib/utils.js'

// eslint-disable-next-line react/prop-types
function CityItem({ city }) {
  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date, id, position } = city
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  )
}

export default CityItem
