import { useSelector } from 'react-redux'
import { ListShoppingCart } from '../components/ItemShoppingCart'

function ShoppingCart () {
  
  const restaurantId = useSelector(state => state.restaurantId)
  const reservationDeposit = useSelector(state => state.reservationDeposit)

  return(
    <>
    <ListShoppingCart
      key={restaurantId}
      deposit={reservationDeposit}
    />
    </>
  )
}
export default ShoppingCart
