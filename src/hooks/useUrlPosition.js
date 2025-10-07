import { useSearchParams } from 'react-router'
import { useEffect } from 'react'

export function useUrlPosition(setLocationCallback) {
  const [searchParams] = useSearchParams()

  const lat = +searchParams.get('lat')
  const lng = +searchParams.get('lng')

  useEffect(() => {
    if (!lat || !lng) return
    setLocationCallback?.([lat, lng])
  }, [lat, lng])

  return {
    lat,
    lng,
  }
}
