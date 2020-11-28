import { createContext, useState } from 'react'

export const AuthContext = createContext();

export function AuthProvider ({ children }) {
  const [ isAutenticated, setIsAutenticated ] = useState( false );
  const handleLogin = (e) => {
    e.preventDefault()
    setIsAutenticated( true );
  }
  const handleLogout = (e) => {
    e.preventDefault()
    setIsAutenticated( false );
  }
  return(
    <AuthContext.Provider
      value= {{ isAutenticated, handleLogin, handleLogout }}
    >
      { children }
import { createContext, useState, useEffect, } from 'react'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isToken, setIsToken] = useState(null)
  const [message, setMessage] = useState('')

  const isAuthenticated = (token) => {
    setIsToken(token)
    setMessage('Estas logueado correctamente')
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsToken(token)
  }, []);

  const logout = () => {
    setIsToken(null)
    localStorage.removeItem('token')
  };

  return (
    <AuthContext.Provider
      value={{
        isToken,
        message,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}