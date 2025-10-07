import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { useNavigate, useSearchParams } from 'react-router'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useCitiesContext } from '../../context/CitiesContext.jsx'

// 创建 L.Icon 实例
const customIcon = L.icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [0, -50],
})

function Index() {
  const [searchParams, setSearchParams] = useSearchParams()
  // const position = useRef([40, 0])

  const [map, setMap] = useState([40, 0])

  const { cities } = useCitiesContext()

  const navigate = useNavigate()

  useEffect(() => {
    const lat = +searchParams.get('lat')
    const lng = +searchParams.get('lng')

    if (!lat || !lng) return
    setMap([lat, lng])
  }, [searchParams])

  return (
    <div className={styles.mapContainer} onClick={() => navigate('add')}>
      <MapContainer center={map} zoom={13} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map(city => (
          <Marker position={[city.position.lat, city.position.lng]} icon={customIcon} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.notes}</span>
            </Popup>
          </Marker>
        ))}
        <MoveCenter position={map} />
      </MapContainer>
    </div>
  )
}

function MoveCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}

export default Index
