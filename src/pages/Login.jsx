import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import PageNav from '../components/pageNav/index.jsx'
import Button from '../components/Button/index.jsx'
import { useAuthContext } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router'

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES

  const [email, setEmail] = useState('jack@example.com')
  const [password, setPassword] = useState('qwerty')

  const navigate = useNavigate()

  const { login, isAuth } = useAuthContext()

  async function toLogin(e) {
    e.preventDefault()

    const loginState = await login({ email, password })
    if (!loginState) return
  }

  useEffect(() => {
    console.log(11, isAuth)
    if (isAuth) navigate('/app/cities', { replace: true })
  }, [isAuth, navigate])

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
        </div>

        <div>
          <Button type="primary" handler={toLogin}>
            Login
          </Button>
        </div>
      </form>
    </main>
  )
}
