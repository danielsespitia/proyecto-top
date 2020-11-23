import React, { Component } from 'react';
import RestProfileForm from '../components/RestProfileForm';

class RestaurantForm extends Component {

  state = {
    restaurantName: '',
    address: '',
    email: '',
    phone: '',
    scheduleFrom: 0,
    scheduleTo: 0,
    deposit: 0,
    nit: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value } )
  };

  handleSubmit (e) {
    e.preventDefault()

    this.props.history.push('/your-profile');
  };

  render () {
    const { restaurantName, address, email, phone, scheduleFrom, scheduleTo, nit, deposit } = this.state

    return (
      <>
        <RestProfileForm 
          restaurantName={restaurantName}
          address={address}
          email={email}
          phone={phone}
          scheduleFrom={scheduleFrom}
          scheduleTo={scheduleTo}
          deposit={deposit}
          nit={nit}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default RestaurantForm