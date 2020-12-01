import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert';
import Desktopstructure from '../components/styled/DesktopStructure';
import RestProfile  from '../components/RestProfile';
 
const RestLogo = styled.img `
  width: 100px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BodyRight = styled.div ` 
  grid-area: bodyRight;
  text-align: center;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

const MyOfficesAnchor = styled.a`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;

function mapStateToProps(state) {
  return { deposit: state.deposit }
}

console.log(mapStateToProps())

class RestaurantProfile extends Component {

  state = {
    _id: '',
    restaurantName: '',
    email: '',
    address: '',
    phone: '',
    scheduleFrom: '',
    scheduleTo: '',
    deposit: 0,
    nit: '',
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')
      const {data: {data}} = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080',
        url: '/restaurants/profile',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { _id, name, email, address, phone, scheduleFrom, scheduleTo, deposit, nit } = data
      this.setState( {_id, name, email, address, phone, scheduleFrom, scheduleTo, deposit, nit} )
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
        _id,
        name,
        email,
        address,
        phone,
        scheduleFrom,
        scheduleTo,
        deposit,
        nit,
      } = this.state
      await axios({
        method: 'PUT',
        baseURL: 'http://localhost:8080',
        url: '/restaurants',
        data: {
          _id,
          name,
          email,
          address,
          phone,
          scheduleFrom,
          scheduleTo,
          deposit,
          nit,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      swal("Perfil actualizado exitosamente", "", "success");
      this.props.history.push('/my-restaurant')
      }
      catch(err){
        swal("Tu perfil no pudo ser actualizado", "", "error");
      }
    }

  handleDeleteRestaurant = async (e) => {
    e.preventDefault();

    await swal("¿Estás seguro que quieres eliminar tu cuenta?", {
      buttons: {
        regret: "No, quiero quedarme otro rato",
        destroy: {
          text: "Sí",
          value: "destroy",
        },
      },
    })
    .then((value) => {
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
              url: '/restaurants',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            swal("Perfil eliminado exitosamente", "", "success");
            localStorage.removeItem('token');
            this.props.history.push('/')
          }catch(err){
            swal("Tu perfil no pudo ser eliminado", "", "error");
          }
          break;
     
        default:
          swal("Nos alegra que sigas con nosotros");
      }
        
    });
  };

  render () {

    const { 
      _id,
      name,
      email,
      address,
      phone,
      scheduleFrom,
      scheduleTo,
      deposit,
      nit,
     } = this.state

    return (
      <>
      <Desktopstructure>
        <BodyLeft>
          <H3>Tu Perfil</H3>
          <RestLogo 
            src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
            alt="logo"
          />
          <MyOfficesAnchor>Sucursales</MyOfficesAnchor>
        </BodyLeft>
        <BodyRight>
          <RestProfile
            key={_id}
            restaurantName={name}
            email={email}
            address={address}
            phone={phone}
            scheduleFrom={scheduleFrom}
            scheduleTo={scheduleTo}
            deposit={deposit}
            nit={nit}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit.bind(this)}
            handleDeleteRestaurant={this.handleDeleteRestaurant.bind(this)}
          />
        </BodyRight>
      </Desktopstructure>
      </>
    )
  }
}

export default connect(mapStateToProps)(RestaurantProfile);