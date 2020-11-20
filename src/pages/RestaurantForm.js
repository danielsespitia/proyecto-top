import React, { Component } from 'react';
import RestProfileForm from '../components/rpf/RestProfileForm';

class RestaurantForm extends Component {

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

    this.setState({ [name]: value } )
  };

  handleSubmit (e) {
    e.preventDefault()

    this.props.history.push('/your-profile');
  };

  render () {
    const { restaurantName, address, phone, scheduleFrom, scheduleTo, deposit } = this.state

    return (
      <>
        <RestProfileForm 
          restaurantName={restaurantName}
          address={address}
          phone={phone}
          scheduleFrom={scheduleFrom}
          scheduleTo={scheduleTo}
          deposit={deposit}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default RestaurantForm