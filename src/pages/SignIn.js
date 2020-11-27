import React from 'react' 
import { FormSignIn } from '../components/FormSignIn'
import axios from 'axios'

class SignIn extends React.Component {

  state = {
    message: '',
    email: '',
    password: '',
    userType: 'clients',
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
    }catch(error){
      this.setState({message: 'usuario invalido'})

      this.setState.error['accounts'] = 'Usuario invalido, no se creo cuenta'
    }

    const pathUser = this.state.userType === 'clients' ? 'client-profile' : 'restaurant-profile'
    this.props.history.push(`${pathUser}`)

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
    const { message, email, password, userType } = this.state
    return(
      <FormSignIn
        message={message}
        email={email}
        password={password}
        userType={userType}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SignIn
