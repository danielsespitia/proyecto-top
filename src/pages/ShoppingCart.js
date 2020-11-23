import React from 'react'
import { ListShoppingCart } from '../components/ItemShoppingCart'
import { data } from '../Data'


class ShoppingCart extends React.Component {
  state = {
    restaurants: data,
  }
  
  render() {
    const { restaurantId } = this.props.match.params
    
    const getRestaurant = (restaurant) => {
      return restaurant.id === restaurantId
    }

    const restaurantData = data.find(getRestaurant)
    
    const { id, deposit } = restaurantData
    return(
      <>
      <ListShoppingCart
        key={id}
        deposit={deposit}
      />
      </>
    )
  }
}
export default ShoppingCart