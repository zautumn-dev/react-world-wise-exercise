// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react'

import styles from './Form.module.css'
import Button from './Button/index.jsx'
import { useNavigate } from 'react-router'
import BackButton from './BackButton.jsx'
import { useUrlPosition } from '../hooks/useUrlPosition.js'
import { asyncHandler, convertToEmoji } from '../lib/utils.js'
import Message from './Message.jsx'
import Spinner from './Spinner.jsx'

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

function Form() {
  // const [cityName, setCityName] = useState('')
  // const [country, setCountry] = useState('')
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [geoError, setGeoError] = useState('')
  const [cityInfo, setCityInfo] = useState({})

  const { lat, lng } = useUrlPosition(async function ([lat, lng]) {
    try {
      setIsLoading(true)
      setGeoError('')
      const [err, response] = await asyncHandler(fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`))

      if (err) {
        return console.error(err.message)
      }
      const city = await response.json()

      if (!city.countryName) throw new Error('请点击一个国家')

      // setCityName(city.city)
      // setCountry(city.countryName)

      setCityInfo(c => ({ ...c, cityName: city.city, country: city.countryName, countryCode: city.countryCode }))
    } catch (error) {
      console.dir(error)
      setGeoError(error.message)
    } finally {
      setIsLoading(false)
    }
  })

  function updateCityInfo(key, val) {
    setCityInfo(city => ({ ...city, [key]: val }))
  }

  if (isLoading) return <Spinner />

  if (geoError) return <Message message={geoError} />

  const countyEmoji = convertToEmoji(cityInfo.countryCode ?? '')

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={e => updateCityInfo('cityName', e.target.value)} value={cityInfo.cityName} />
        <span className={styles.flag}>{countyEmoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityInfo.cityName}?</label>
        <input id="date" onChange={e => setDate(e.target.value)} value={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityInfo.cityName}</label>
        <textarea id="notes" onChange={e => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  )
}

export default Form
