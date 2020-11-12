import React, { Component } from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import RestProfileForm from '../components/rpf/RestProfileForm';
import RestProfiles from '../components/rpf/RestProfiles';

const RestLogo = styled.img`
  width: 100px;
  border-radius: 100%;
`;

class RestaurantProfile extends Component {

  state = {
    restaurantName: '',
    address: '',
    phone: '',
    scheduleFrom: 0,
    scheduleTo: 0,
    deposit: 0,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value }, () => console.log('current', this.state))
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault();

    const { restaurantName, address, phone, scheduleFrom, scheduleTo, deposit } = this.state
    const newRprof = {
      id: uuidv4(),
      restaurantName,
      address,
      phone,
      scheduleFrom,
      scheduleTo,
      deposit,
    };

    this.setState({
      // products: this.products.concat(newProduct)
      rprofiles: [ newRprof ]
    })
  }

  render () {
    const { restaurantName, address, phone, scheduleFrom, scheduleTo, deposit, rprofiles } = this.state

    if (RestProfiles.length > 0) {
      
    }

    return (
      <>
        <h1>Bienvenido a Alamesa</h1>
        <RestLogo 
          src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
          alt="logo"
        />
        <RestProfileForm 
          restaurantName={restaurantName}
          address={address}
          phone={phone}
          scheduleFrom={scheduleFrom}
          scheduleTo={scheduleTo}
          deposit={deposit}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <RestProfiles 
          rprofiles={rprofiles}
        />
      </>
    )
  }
}

export default RestaurantProfile