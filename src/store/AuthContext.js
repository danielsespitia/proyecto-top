import { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setCurrentUser('Profile')
    setMessage('Estas Logueado correctamente')
  };

  const handleRegister = async (e) => {
    setToken(true)
  };

  const logout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        message,
        token,
        handleLogin,
        handleRegister,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}