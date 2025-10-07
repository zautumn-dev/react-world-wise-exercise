import React from 'react'
import { Link } from 'react-router'
import styles from './cityItem.module.css'
import { formatDate } from '../../../lib/utils.js'
import { useCitiesContext } from '../../../context/CitiesContext.jsx'

// eslint-disable-next-line react/prop-types
function CityItem({ city }) {
  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date, id, position } = city
  console.log(position)
  const { currentCity } = useCitiesContext()

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${currentCity.id === id ? Reflect.get(styles, 'cityItem--active') : ''}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}

export default CityItem
