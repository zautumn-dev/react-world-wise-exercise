import { createContext, useContext, useEffect, useState } from 'react'
import { asyncHandler } from '../lib/utils.js'

const CitiesContext = createContext(null)

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})

  const contextValue = {
    cities,
    isLoading,
    currentCity,
    // fetch city
    fetchCity: async function (id) {
      setIsLoading(true)
      const [err, response] = await asyncHandler(fetch(`${import.meta.env.VITE_BASE_URL}/cities/${id}`))
      setIsLoading(false)
      if (err) {
        return console.error(err.message)
      }

      setCurrentCity(await response.json())
    },

    // add city
    fetchAddCity: async function (city) {
      setIsLoading(true)
      const [err, response] = await asyncHandler(
        fetch(`${import.meta.env.VITE_BASE_URL}/cities`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(city),
        }),
      )

      setIsLoading(false)
      if (err) {
        return console.error(err.message)
      }

      const newCity = await response.json()

      setCities(cities => [...cities, newCity])
    },
  }

  // cities
  useEffect(() => {
    setIsLoading(true)
    async function fetchCityList() {
      const [err, response] = await asyncHandler(fetch(`${import.meta.env.VITE_BASE_URL}/cities`))

      setIsLoading(false)

      if (err) {
        return console.error(err.message)
      }

      const result = await response.json()
      setCities(result)
    }

    fetchCityList()
  }, [])

  return <CitiesContext value={contextValue}>{children}</CitiesContext>
}

export function useCitiesContext() {
  const context = useContext(CitiesContext)
  if (!context) throw new Error('useCities must be used within cities')

  return context
}

export default CitiesContext
