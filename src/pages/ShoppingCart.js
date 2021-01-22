import { useSelector } from 'react-redux'
import { ListShoppingCart } from '../components/ItemShoppingCart'

function ShoppingCart () {
  
  const data = useSelector(
    ({reservationReducer: {
      ...state 
    }}) => {
    return { ...state }
  })

  return(
    <>
    <ListShoppingCart
      key={data.idRestaurantReservation}
      deposit={data.deposit}
      message={data.messageReservation}
      id={data.idRestaurantReservation}
      loading={data.loading}
    />
    </>
  )
}
export default ShoppingCart
