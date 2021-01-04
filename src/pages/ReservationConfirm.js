import { ReservationConfirmPayment } from '../components/Reservation/ReservationConfirmPayment'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getClient } from '../store/actions/Client.actions'

const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true
})

function ReservationConfirm() {

  const dispatch = useDispatch()

  const today = new Date()
  const month = today.toLocaleString('es-CO', { month: 'long'}) 
  const date = `${ today.getDate() } de ${ month } de ${ today.getFullYear()}`
  const time = today.toLocaleString('es-CO', { timeStyle: 'short', hour12: 'true'})

  const { nameRestaurantReservation, deposit } = useSelector(
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

  const clientData = data

  const invoice = localStorage.getItem('reservation');
  
  const handleClick = () => {
    handler.open(
      {
        //Parametros compra (obligatorio)
        name: `${nameRestaurantReservation}`,
        description: "Pago Reserva alamesa",
        invoice: `${invoice}`,
        currency: "cop",
        amount: `${deposit}`,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "es",

        //Onpage="false" - Standard="true"
        external: "false",


        //Atributos opcionales
        extra1: "descripción reserva",
        response: `http://localhost:3000/response`,

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
  }

  return (
    <>
      <ReservationConfirmPayment
        name={nameRestaurantReservation}  
        deposit={deposit}
        date={date}
        time={time}
        handlePayment={handleClick}
      />
    </>
  )
}

export default ReservationConfirm
