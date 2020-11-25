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
        handleSubmit={this.context.handleLogin}
      />
    )
  }
}

export default SignIn