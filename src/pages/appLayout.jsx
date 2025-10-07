import React from 'react'
import Sidebar from '../components/sidebar/index.jsx'
import styles from './appLayout.module.css'
import Map from '../components/Map/index.jsx'
import User from './User.jsx'
import { ProtectedRouteProvider } from '../context/ProtectedRoute.jsx'

function AppLayout() {
  return (
    <div className={styles.app}>
      <ProtectedRouteProvider>
        <Sidebar />
        <Map />
        <User />
      </ProtectedRouteProvider>
    </div>
  )
}

export default AppLayout
