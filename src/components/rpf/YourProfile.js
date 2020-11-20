function YourProfile ( { restaurantName, address, phone, scheduleFrom, scheduleTo, deposit } ) {
  return (
    <>
      <p><strong>{restaurantName}</strong></p>
      <p><strong>Dirección: </strong> {address}</p>
      <p><strong>Teléfono: </strong> {phone}</p>
      <p><strong>Hora de Apertura: </strong> {scheduleFrom}</p>
      <p><strong>Hora de Cierre: </strong> {scheduleTo}</p>
      <p><strong>Pago Mínimo: </strong> ${deposit}</p>
    </>
  )
}
export default YourProfile