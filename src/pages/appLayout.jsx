import React from 'react'
import Sidebar from '../components/sidebar/index.jsx'
import styles from './appLayout.module.css'
import Map from '../components/Map/index.jsx'

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayout
