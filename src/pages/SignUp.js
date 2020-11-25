import React from 'react'
import { FormSignUp } from '../components/FormSignUp'
import axios from 'axios'

class SignUp extends React.Component {
  state = {
    id: 1,
    name: '',
    lastName: '',
    email:'',
    password: '',
    confirmPassword: '',
    userType: 'clients',
    terms: false,
    errors: {},
  };

  handleChange = (e) => {
    const { name, value, type, checked} = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if(this.validate()) {
      this.setState({
        name: '',
        password: '',
        confirmPassword: '',
        email:'',
        userType: '',
        terms: false,
      })
    }  

  try {
    const { name, password, email, userType, terms } = this.state;
    const { data: { token } } = await axios({
      method: 'POST',
      baseURL: 'http://localhost:8080',
      url: `/${userType}/sign-up`,
      data: { name, password, email, userType, terms }
    });
    localStorage.setItem('token', token);
    } catch(err) {
      this.setState.errors['account'] = 'Usuario invalido, no se creo cuenta'
    }
    
    const pathUser = this.state.userType === 'clients' ? 'client-profile' : 'restaurant-profile';
    this.props.history.push(`${pathUser}`);
  };

  validate() {
    const { password, confirmPassword, errors } = this.state;
    const arePasswordEqual = !!password && !!confirmPassword && password === confirmPassword;

    if( !arePasswordEqual ) {
      errors['password'] = 'La contraseña no coincide'
    }
    this.setState({ errors });
  };

  render () {
    const { name, password, confirmPassword, email, userType, terms, errors } = this.state
    return(
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
