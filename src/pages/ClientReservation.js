import { useState } from 'react'
import { ClientReservationJSX } from '../components/ClientReservation/ClientReservationJSX';

const reservationData = [
  {
    id: '100123',
    restaurantName: 'Pollito D.C.',
    restaurantAddress: 'Av 19 # 5N-12 local 2',
    reservationDate: '27/11/2020',
    reservationHour: '7:00 p.m.'
  },
  {
    id: '100124',
    restaurantName: 'Sushisito',
    restaurantAddress: 'Av siempre viva 1 2 3',
    reservationDate: '28/11/2020',
    reservationHour: '6:00 p.m.'
  },
];

function ClientReservation () {

  const [ restaurantName, setRestaurantName ] = useState(reservationData[0].restaurantName)
  const [ restaurantAddress, setRestaurantAddress ] = useState('calle 14 # 25 *89')
  const [ reservationDate, setReservationDate ] = useState('27/Dic/2020')
  const [ reservationHour, setReservationHour ] = useState('7:00 pm') 

  return(
    <ClientReservationJSX
      name = {restaurantName}
      address = {restaurantAddress}
      date = {reservationDate}
      hour = {reservationHour}
    >
    </ClientReservationJSX>
  )
}

export default ClientReservation

