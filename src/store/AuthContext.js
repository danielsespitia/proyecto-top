import { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setCurrentUser('Profile')
    setMessage('Estas Logueado correctamente')
  };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   if(validate()) {
      
  //     try {
  //       const { name, password, email, userType, terms } = this.state;
  //       const isUserType = userType === 'clients' ? 'clients' : 'restaurants'; 
  //       const { data: { token } } = await axios({
  //         method: 'POST',
  //         baseURL: 'http://localhost:8080',
  //         url: `/${isUserType}/sign-up`,
  //         data: { name, password, email, terms }
  //       });
  //       localStorage.setItem('token', token);
        
  //       const pathUser = this.state.userType === 'clients' ? 'client-profile' : 'restaurant-profile';
  //       this.props.history.push(`${pathUser}`);
  //     } catch(err) {
  //       setErrors['account'] = 'Usuario invalido, no se creo cuenta'
  //     }
  //   }  
  // };

  
  // const validate = () => {
  //   const { password, confirmPassword } = this.state;
  //   const arePasswordEqual = !!password && !!confirmPassword && password === confirmPassword;

  //   if( !arePasswordEqual ) {
  //     setErrors['password'] = 'La contraseña no coincide'
  //     return false
  //   }
  //   return true
  // };

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
        errors,
        handleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}