import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../store/AuthContext';
import { ClientProfileForm } from '../components/ClientProfileForm';
import { ThemeConsumer } from 'styled-components';

class ClientProfile extends React.Component{

  static contextType = AuthContext;

  state = {
    name: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    identification: '',
    birthday: '', 
    payType: 'cash',
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
      swal("Perfil actualizado exitosamente", "", "success");
    }catch(err) {
      swal("Tu perfil no pudo ser actualizado", "", "error");
    }
  };

  handleDeleteClient = async (e) => {
    e.preventDefault();

    await swal("Estas seguro que quieres eliminar tu cuenta?", {
      buttons: {
        regret: "No, quiero quedamer otro rato",
        destroy: {
          text: "Si",
          value: "destroy",
        },
      },
    })
    .then ((value) => {
      switch (value) {
        case "cancel":
          swal("Nos alegra que sigas con nosotros");
          break;

          case "destroy":
            try{
              const token = localStorage.getItem('token')
              axios({
                method: 'DELETE',
                baseURL: 'http://localhost:8080',
                url: `/clients`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              swal("Perfil eliminado exitosamente","","success");
              localStorage.removeItem('token');
              this.context.isAuthenticated();
              this.props.history.push('/');
            }catch(err){
              swal("Tu perfil no pudo ser eliminado", "", "error");
            }
            break;
          default:
            swal("Nos alegra que sigas con nosotros");
      }
    });
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
