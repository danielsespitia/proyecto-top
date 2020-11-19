import React from 'react'
import { ListShoppingCart } from '../components/ItemShoppingCart'
import { data } from '../Data'

const getRandomRestaurant = Math.round(Math.random()*(5-0) + 0)

const idRandomRestaurant = data[getRandomRestaurant]
class ShoppingCart extends React.Component {
  state = {
    restaurants: data,
  }
  render() {
    return(
      <>
      <ListShoppingCart
        key={idRandomRestaurant.id}
        deposit={idRandomRestaurant.deposit}
      />
      </>
    )
  }
}
export default ShoppingCart