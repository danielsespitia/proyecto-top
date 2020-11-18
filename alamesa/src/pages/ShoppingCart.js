import React from 'react'
import { ListShoppingCart } from '../components/ItemShoppingCart'
import { data } from '../Data'

const getRandomRestaurant = Math.round(Math.random()*(5-0) + 0)
class ShoppingCart extends React.Component {
  state = {
    restaurants: data,
  }
  render() {
    const { restaurants } = this.state
    return(
      <>
      {restaurants.filter( restaurant => restaurant.length === getRandomRestaurant).map(({id, deposit}) => {
        return (
          <ListShoppingCart
            key={id}
            deposit={deposit}
          />
        )
      })}
      </>
    )
  }
}
export default ShoppingCart