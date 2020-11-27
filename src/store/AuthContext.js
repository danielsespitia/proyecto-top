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