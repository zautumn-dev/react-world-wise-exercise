import { createContext, useContext, useReducer } from 'react'

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}

const AuthContext = createContext(null)

function authReducer(state, cb) {
  if (!cb) cb = state => state

  return cb(state)
}

const userInitialState = {
  user: null,
  isAuth: false,
}

export function AuthProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(authReducer, userInitialState)

  async function login(formData) {
    console.log(user)
    if (formData.email === FAKE_USER.email && formData.password === FAKE_USER.password) {
      dispatch(function (_) {
        return { user: { ...FAKE_USER }, isAuth: true }
      })
      return true
    }

    return false
  }

  function logout() {
    dispatch(function () {
      return { user: null, isAuth: false }
    })
  }
  return (
    <AuthContext
      value={{
        user,
        isAuth,
        login,
        logout,
      }}>
      {children}
    </AuthContext>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}

export default AuthContext
