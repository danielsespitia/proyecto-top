import React from 'react'
import { AuthContext } from '../store/AuthContext'
import { FormSignIn } from '../components/FormSignIn'

class SignIn extends React.Component {
  static contextType = AuthContext;

  state = {
    message: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefatult()
    const token = true
    this.context.isAuthenticated(token)
    console.log(token)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    const { message, email, password } = this.state
    return (
      <FormSignIn
        message={message}
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SignIn