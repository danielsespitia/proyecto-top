import { createContext, useState, useEffect, } from 'react'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isToken, setIsToken] = useState(null)
  const [message, setMessage] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [user, setUser] = useState('')

  const onCloseModal = () => {
    setModalIsOpen(false)
  };

  const onOpenModal = () => {
    setModalIsOpen(true)
  };

  const isAuthenticated = (token, pathUser) => {
    setIsToken(token)
    setUser(pathUser)
    setMessage('Estas logueado correctamente')
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    const pathUser = localStorage.getItem('pathUser')
    setIsToken(token)
    setUser(pathUser)
  }, []);

  const logout = () => {
    setIsToken(null)
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('pathUser')
  };

  return (
    <AuthContext.Provider
      value={{
        isToken,
        user,
        message,
        isAuthenticated,
        logout,
        modalIsOpen,
        onCloseModal,
        onOpenModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}