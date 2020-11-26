import React from 'react'
import axios from 'axios'
import { ClientProfileForm } from '../components/ClientProfileForm'

class ClientProfile extends React.Component{

  state = {
    profileData: {}
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')
      const {data: {data}} = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080',
        url: '/clients/profile',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ profileData: data })
    } catch(err) {
      localStorage.removeItem('token');
      this.props.history.push('/')
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value === '' ? '' : value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render(){
    const { 
      name,
      lastName,
      email,
      address,
      phone,
      identification,
      birthday, 
      payType 
    } = this.state.profileData

    return(
     <ClientProfileForm
      name = {name}
      lastName = {lastName}
      email = {email}
      address = {address}
      phone = {phone}
      identification = {identification}
      birthday = {birthday}
      payType = {payType}
      handleChange = {this.handleChange}
      handleSummit = {this.handleSubmit}
      >
     </ClientProfileForm>
    )
  }
}

export default ClientProfile
