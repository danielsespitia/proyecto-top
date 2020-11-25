import { createContext, useState } from 'react'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentUser('Profile')
    this.props.history.push('/client-profile');
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //     this.setState({
  //       message: 'Estas Logueado correctamente'
  //     })
  // };

  const logout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        handleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}