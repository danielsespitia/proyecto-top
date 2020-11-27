import React from 'react'
import { FormSignUp } from '../components/FormSignUp'
import { AuthContext } from '../store/AuthContext'
import axios from 'axios'

class SignUp extends React.Component {
  static contextType = AuthContext;

  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'clients',
    terms: false,
    errors: {},
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      try {
        const { name, password, email, userType, terms } = this.state;
        const { data: { token } } = await axios({
          method: 'POST',
          baseURL: 'http://localhost:8080',
          url: `/${userType}/sign-up`,
          data: { name, password, email, terms }
        });
        localStorage.setItem('token', token);
        this.context.isAuthenticated(token);
        const pathUser = this.state.userType === 'clients' ? 'client-profile' : 'restaurant-profile';
        this.props.history.push(`${pathUser}`);
      } catch (err) {
        const { errors } = this.state
        const newError = { ...errors, account: 'Usuario invalido, no se creo cuenta' }
        this.setState({ errors: newError })
      }
    }
  };

  validate() {
    const { password, confirmPassword, errors } = this.state;
    const arePasswordEqual = !!password && !!confirmPassword && password === confirmPassword;

    if (!arePasswordEqual) {
      const newError = { ...errors, password: 'La contraseña no coincide'}
      this.setState({ errors: newError })
      return false
    }
    return true
  };

  render() {
    const { name, password, confirmPassword, email, userType, terms, errors } = this.state
    return (
      <>
        <FormSignUp
          name={name}
          password={password}
          confirmPassword={confirmPassword}
          email={email}
          userType={userType}
          terms={terms}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange}
          errorsPassword={errors.password}
          errorsAcount={errors.account}
        />
      </>
    )
  }
}

export default SignUp
