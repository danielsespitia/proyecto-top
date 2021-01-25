import { ReservationConfirmPayment } from '../components/Reservation/ReservationConfirmPayment'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getClient } from '../store/actions/Client.actions'
import moment from 'moment'
import 'moment/locale/es';

const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true
})

function ReservationConfirm() {

  const dispatch = useDispatch()

  
  const { nameRestaurantReservation, deposit, date, time } = useSelector(
    ({reservationReducer: {
      ...state
    }}) => {
      return { ...state} 
    })
    
  useEffect(() => {
    dispatch(getClient())
  }, [])

  const {data} = useSelector(
    ({ clientReducer: {
      data
    }}) => {
      return {
        data
      }
  })
  
  moment.locale('es');
  const dateNew = moment(date).format('LL');
  
  const reservation = {
    'name': `${nameRestaurantReservation}`,
    'time': `${time}`,
    'date': `${dateNew}`,
  };

  const jsonReservation = JSON.stringify(reservation)

  const clientData = data

  const amount = deposit ? deposit : '20000'

  const invoice = localStorage.getItem('reservation');

  const URL = process.env.REACT_APP_BASE_URL 
  
  const handleClick = () => {
    handler.open(
      {
        //Parametros compra (obligatorio)
        name: `${nameRestaurantReservation}`,
        description: "Pago Reserva alamesa",
        invoice: `${invoice}`,
        currency: "cop",
        amount: `${amount}`,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "es",

        //Onpage="false" - Standard="true"
        external: "false",


        //Atributos opcionales
        extra1: "descripción reserva",
        response: `${URL}/response`,

        //Atributos cliente
        email_billing: `${clientData.email}`,
        name_billing: `${clientData.name} ${clientData.lastName}`,
        address_billing: `${clientData.address}`,
        type_doc_billing: "CC",
        mobilephone_billing: `${clientData.phone}`,
        number_doc_billing: `${clientData.identification}`,

       //atributo deshabilitación metodo de pago
        methodsDisable: ["SP","CASH"]
      }
    )
    localStorage.setItem('ReservationData', jsonReservation)
  }

  return (
    <>
      <ReservationConfirmPayment
        name={nameRestaurantReservation}  
        deposit={deposit}
        date={dateNew}
        time={time}
        handlePayment={handleClick}
      />
    </>
  )
}

export default ReservationConfirm
