import { ReservationConfirmPayment } from '../components/Reservation/ReservationConfirmPayment'
import { useSelector } from 'react-redux'

function ReservationConfirm() {

  const today = new Date()
  const month = today.toLocaleString('es-CO', { month: 'long'}) 
  const date = `${ today.getDate() } de ${ month } de ${ today.getFullYear()}`
  const time = today.toLocaleString('es-CO', { timeStyle: 'short', hour12: 'true'})

  const { name, deposit } = useSelector(
    ({reservationReducer: {
      ...state
    }}) => {
      return { ...state} 
    })

  return (
    <>
      <ReservationConfirmPayment
        name={name}  
        deposit={deposit}
        date={date}
        time={time}
      />
    </>
  )
}

export default ReservationConfirm
