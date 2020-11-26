import { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setToken(true)
    setCurrentUser('Profile')
    setMessage('Estas Logueado correctamente')
  };

  const handleRegister = (token) => {
    setToken(token)
  };

  const logout = () => {
    setToken(null)
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        message,
        handleLogin,
        handleRegister,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}