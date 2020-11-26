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
    </AuthContext.Provider>
  )
}