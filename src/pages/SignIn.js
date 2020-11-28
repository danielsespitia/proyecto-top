import React from 'react'
import { AuthContext } from '../store/AuthContext'
import { FormSignIn } from '../components/FormSignIn'
import axios from 'axios'

class SignIn extends React.Component {
  static contextType = AuthContext;

  state = {
    message: '',
    email: '',
    password: '',
    userType: 'clients',
    errors: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      const { email, password, userType } = this.state
      const { data: { token } } = await axios ({
        method: 'POST',
        baseURL: 'http://localhost:8080',
        url: `/${userType}/sign-in`,
        data: { email, password, userType }
      });
      localStorage.setItem( 'token', token )
      const pathUser = userType === 'clients' ? 'client-profile' : 'restaurant-profile'
      this.setState({
        message: 'Estas Logueado correctamente'
      })
      this.context.isAuthenticated(token)
      this.props.history.push(`${pathUser}`)
    }catch(error){
      localStorage.removeItem('token')
      const { errors } = this.state
      const newError = { ...errors, signin: 'Usuario o password incorrectos'}
      this.setState({ errors: newError })
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    const { message, email, password, userType, errors } = this.state
    return(
      <FormSignIn
        message={message}
        email={email}
        password={password}
        userType={userType}
        errorsSignin={errors.signin}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SignIn
