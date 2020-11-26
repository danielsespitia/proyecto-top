import { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setToken(true)
    setMessage('Estas logueado correctamente')
  };

  const handleRegister = (token) => {
    setToken(token)
    setMessage('Estas logueado correctamente')
  };

  const logout = () => {
    setToken(null)
  };

  return (
    <AuthContext.Provider
      value={{
        token,
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