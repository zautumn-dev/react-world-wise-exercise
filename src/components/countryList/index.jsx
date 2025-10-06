import React from 'react'
import styles from './CountryList.module.css'
import Spinner from '../Spinner.jsx'
import CountryItem from './components/CountryItem.jsx'
import Message from '../Message.jsx'

function CountryList({ isLoading, cityList }) {
  if (isLoading) return <Spinner />

  if (!cityList.length) return <Message message="Add your first city by clicking on a city on the map" />

  const countries = cityList.reduce(
    (acc, city) =>
      acc.find(country => country.country === city.country)
        ? acc
        : [...acc, { country: city.country, emoji: city.emoji }],
    [],
  )

  console.log(countries)

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  )
}

export default CountryList
