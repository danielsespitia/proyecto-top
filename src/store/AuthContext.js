import { createContext, useState, useEffect, } from 'react'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isToken, setIsToken] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (token) => {
    setIsToken(token)
    setMessage('Estas logueado correctamente')
  };

  const handleRegister = (token) => {
    setIsToken(token)
    setMessage('Estas logueado correctamente')
  };

  useEffect((handleRegister) => {
    localStorage.setItem('token', isToken)
  }, []);

  const logout = () => {
    setIsToken(null)
  };

  return (
    <AuthContext.Provider
      value={{
        isToken,
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