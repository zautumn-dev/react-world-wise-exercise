import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { useNavigate, useSearchParams } from 'react-router'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import { useCitiesContext } from '../../context/CitiesContext.jsx'
import { useGeolocation } from '../../hooks/useGeoLocation.js'
import Button from '../Button/index.jsx'

// 创建 L.Icon 实例
const customIcon = L.icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [0, -50],
})

function Index() {
  // const position = useRef([40, 0])
  const [searchParams, setSearchParams] = useSearchParams()
  const [map, setMap] = useState([40, 0])

  const { isLoading: isPositionLoading, position: geoLocationPosition, getPosition } = useGeolocation()

  const { cities } = useCitiesContext()

  function getGeoLocation() {
    getPosition()
  }

  useEffect(() => {
    const lat = +searchParams.get('lat')
    const lng = +searchParams.get('lng')

    if (!lat || !lng) return
    setMap([lat, lng])
  }, [searchParams])

  useEffect(() => {
    console.log(geoLocationPosition)
    if (!geoLocationPosition) return

    setMap([geoLocationPosition.lat, geoLocationPosition.lng])
  }, [geoLocationPosition])

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type="position" handler={getGeoLocation}>
          {isPositionLoading ? 'Loading...' : 'USE YOUR POSITION'}
        </Button>
      )}
      <MapContainer center={map} zoom={13} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*定位位置*/}
        {geoLocationPosition && (
          <Marker position={map} icon={customIcon}>
            <Popup>
              <span>当前所在位置</span>
            </Popup>
          </Marker>
        )}
        {cities.map(city => (
          <Marker position={[city.position.lat, city.position.lng]} icon={customIcon} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.notes}</span>
            </Popup>
          </Marker>
        ))}
        <MoveCenter position={map} />
        <AddToMap />
      </MapContainer>
    </div>
  )
}

function MoveCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}

function AddToMap() {
  const navigate = useNavigate()

  useMapEvents({
    click: e => navigate(`add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  })
}

export default Index
