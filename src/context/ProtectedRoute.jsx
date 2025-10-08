import { createContext, useContext, useEffect } from 'react'
import { useAuthContext } from './AuthContext.jsx'
import { useNavigate } from 'react-router'

const ProtectedRoute = createContext()

export function ProtectedRouteProvider({ children }) {
  const { isAuth } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) navigate('/login')
  }, [isAuth, navigate])

  return <ProtectedRoute value={{}}>{children}</ProtectedRoute>
}

export function useProtectedRouteContext() {
  return useContext(ProtectedRoute)
}
