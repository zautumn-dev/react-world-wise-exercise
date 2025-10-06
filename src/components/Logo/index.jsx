import styles from './index.module.css'
import { Link } from 'react-router'

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  )
}

export default Logo
