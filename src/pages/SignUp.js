import React from 'react'
import { FormSignUp } from '../components/FormSignUp'

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