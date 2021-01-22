import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FormSignUp } from '../components/FormSignUp/FormSignUp'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'

function SignUp () {
  
  const history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('clients');
  const [terms, setTerms] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch(name) {
      case 'name':
        setName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      case 'confirmPassword':
        setConfirmPassword(value)
        break;
      case 'userType':
        setUserType(value)
        break;
      case 'terms':
        setTerms(checked)
        break;
      default: break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const { data: { token } } = await axios({
          method: 'POST',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `/${userType}/sign-up`,
          data: { name, password, email, userType, terms }
        });
        localStorage.setItem('token', token);
        const pathUser = userType === 'clients' ? '/client-profile' : '/restaurant-profile/edit';
        localStorage.setItem('pathUser', pathUser);
        isAuthenticated(token, pathUser);
        history.push(`${pathUser}`);
      } catch (err) {
        setErrors({ account: 'Usuario invalido, no se creo cuenta' })
      }
    }
  };

  const validate = () => {
    const arePasswordEqual = !!password && !!confirmPassword && password === confirmPassword;

    if (!arePasswordEqual) {
      setErrors({password: 'La contraseña no coincide'})
      return false
    }
    return true
  };

  return (
    <>
      <FormSignUp
        name={name}
        password={password}
        confirmPassword={confirmPassword}
        email={email}
        userType={userType}
        terms={terms}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errorsPassword={errors.password}
        errorsAcount={errors.account}
      />
    </>
  )
}

export default SignUp
