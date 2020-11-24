import React from 'react' 
import { FormSignIn } from '../components/FormSignIn'

class SignIn extends React.Component {

  state = {
    message: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
      this.setState({
        message: 'Estas Logueado correctamente'
      })
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    const { message, email, password } = this.state
    return(
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