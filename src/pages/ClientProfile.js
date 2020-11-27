import React from 'react'
import axios from 'axios'
import { ClientProfileForm } from '../components/ClientProfileForm'

class ClientProfile extends React.Component{

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
    //profileData: {}
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
    console.log('onSubmit')

    // try {
    //   console.log("aquí voy")
    //   const { 
    //     name,
    //     lastName,
    //     email,
    //     address,
    //     phone,
    //     identification,
    //     birthday, 
    //     payType 
    //   } = this.state
    //   await axios({
    //     method: 'PUT',
    //     baseURL: 'http://localhost:8080',
    //     url: `/clients`,
    //     data: {
    //       name,
    //       lastName,
    //       email,
    //       address,
    //       phone,
    //       identification,
    //       birthday, 
    //       payType,
    //     }
    //   });
    //   console.log('Actualización exitosa')
    // }catch(err) {
    //   console.log('Actualización fallida')
    // }
  };
  handleUpdate = (e) => {
    e.preventDefault();
    console.log('Actualizar')
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log('onClick')
  };

  render(){
    console.log(this.state)

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
      handleUpdate = {this.handleUpdate.bind(this)}
      handleClick = {this.handleClick.bind(this)}
      >
     </ClientProfileForm>
    )
  }
}

export default ClientProfile
