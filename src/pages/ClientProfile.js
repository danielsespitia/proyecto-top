import React from 'react'
import axios from 'axios'
import { ClientProfileForm } from '../components/ClientProfileForm'
import { AuthContext } from '../store/AuthContext'

class ClientProfile extends React.Component{
  static contextType = AuthContext;

  state = {
    _id: '',
    name: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    identification: '',
    birthday: '', 
    payType: '',
  };

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
      const { name, email, _id } = data
      this.setState( {name, email, _id} )
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


  handleDeleteClient = (e) => {
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
      payType,
    } = this.state


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
      handleSubmit = {this.handleSubmit.bind(this)}
      handleDeleteClient = {this.handleDeleteClient.bind(this)}
      >
     </ClientProfileForm>
    )
  }
}

export default ClientProfile
