import React from 'react'
import axios from 'axios'
import { ClientProfileForm } from '../components/ClientProfileForm'

class ClientProfile extends React.Component{

  state = {
    name: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    identification: '',
    birthday: '', 
    payType: 'cash',
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
      const date = !data.birthday ? '' : data.birthday.split('T')[0];
      this.setState({ ...data, birthday: date })
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

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const { 
        name,
        lastName,
        email,
        address,
        phone,
        identification,
        birthday, 
        payType 
      } = this.state
      const resp = await axios({
        method: 'PUT',
        baseURL: 'http://localhost:8080',
        url: `/clients`,
        data: {
          name,
          lastName,
          email,
          address,
          phone,
          identification,
          birthday, 
          payType,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(resp.data.message);
    }catch(err) {
      alert('Los datos no se actualizarón');
    }
  };

  handleDeleteClient = async (e) => {
    e.preventDefault();
    try{
      const token = localStorage.getItem('token')
      const resp = await axios({
        method: 'DELETE',
        baseURL: 'http://localhost:8080',
        url: `/clients`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(resp.data.message)
      localStorage.removeItem('token');
      this.props.history.push('/')
    }catch(err){
      alert('El usuario no fue eliminado');
    }
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
