import React from 'react'
import styles from './CityList.module.css'
import Spinner from '../Spinner.jsx'
import CityItem from './components/cityItem.jsx'
import Message from '../Message.jsx'
import { useCitiesContext } from '../../context/CitiesContext.jsx'

function cityList() {
  const { isLoading, cities: cityList } = useCitiesContext()
  if (isLoading) return <Spinner />

  if (!cityList.length) return <Message message="Add your first city by clicking on a city on the map" />

  return (
    <ul className={styles.cityList}>
      {cityList.map(city => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}

export default cityList
