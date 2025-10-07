// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react'
import styles from './Form.module.css'
import Button from './Button/index.jsx'
import { Navigate, useNavigate } from 'react-router'
import BackButton from './BackButton.jsx'
import { useUrlPosition } from '../hooks/useUrlPosition.js'
import { asyncHandler, convertToEmoji } from '../lib/utils.js'
import Message from './Message.jsx'
import Spinner from './Spinner.jsx'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useCitiesContext } from '../context/CitiesContext.jsx'

// https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api
// 客户端反向地理编码至城市 API
const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

function Form() {
  // const [cityName, setCityName] = useState('')
  // const [country, setCountry] = useState('')
  // const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [geoError, setGeoError] = useState('')
  const [cityInfo, setCityInfo] = useState({ date: new Date(), notes: '' })

  const navigate = useNavigate()

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

  const { fetchAddCity, isLoading: isCitiesLoading } = useCitiesContext()

  if (!lat || !lng) return <Navigate to="/app" />

  if (isLoading) return <Spinner />

  if (geoError) return <Message message={geoError} />

  const countyEmoji = convertToEmoji(cityInfo.countryCode ?? '')

  function updateCityInfo(key, val) {
    setCityInfo(city => ({ ...city, [key]: val }))
  }

  async function handleSubmitFormData(e) {
    e.preventDefault()
    const formData = {
      ...cityInfo,
      position: {
        lat,
        lng,
      },
      emoji: countyEmoji,
    }
    await fetchAddCity(formData)
    navigate('/app')
  }

  return (
    <form className={`${styles.form} ${isCitiesLoading ? styles.loading : ''}`}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={e => updateCityInfo('cityName', e.target.value)} value={cityInfo.cityName} />
        <span className={styles.flag}>{countyEmoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityInfo.cityName}?</label>
        {/*<input id="date" onChange={e => setDate(e.target.value)} value={date} />*/}
        <DatePicker selected={cityInfo.date} onChange={date => updateCityInfo('date', date)} dateFormat="yyyy/MM/dd" />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityInfo.cityName}</label>
        <textarea id="notes" onChange={e => updateCityInfo('notes', e.target.value)} value={cityInfo.notes} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" handler={handleSubmitFormData}>
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  )
}

export default Form
