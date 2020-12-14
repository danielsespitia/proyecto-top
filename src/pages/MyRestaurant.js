import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Desktopstructure from '../components/styled/DesktopStructure';
import MyRest from '../components/MyRest';
import { Link } from 'react-router-dom'

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


const MyReservationAnchor = styled.a`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;

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
        baseURL: process.env.REACT_APP_SERVER_URL,
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

  handleClick = e => {
    e.preventDefault();
    this.props.history.push('/restaurant-profile/edit')
  }

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
          <Link to={{
              pathname: `/restaurant-profile/reservations`}}
              style={{ textAlign: 'center' }}>
            <MyReservationAnchor>Mis reservas</MyReservationAnchor>
          </Link>
        </BodyLeft>
        <BodyRight>
          <MyRest
            key={_id}
            restaurantName={name}
            email={email}
            address={address}
            phone={phone}
            scheduleFrom={scheduleFrom}
            scheduleTo={scheduleTo}
            deposit={deposit}
            nit={nit}
            handleClick={this.handleClick}
          />
        </BodyRight>
      </Desktopstructure>
      </>
    )
  }
}

export default RestaurantProfile