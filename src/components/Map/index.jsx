import React from 'react'
import styles from './index.module.css'
import { useNavigate, useSearchParams } from 'react-router'
function Index() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  return (
    <div className={styles.mapContainer} onClick={() => navigate('add')}>
      {lat} - {lng}
    </div>
  )
}

export default Index
