export function RestProfile({ restaurantName, address, phone, scheduleFrom, scheduleTo, deposit }) {
  return (
    <div className="rprofile">
      <h2>{restaurantName}</h2>
      <p><strong>Dirección: </strong> {address}</p>
      <p><strong>Teléfono: </strong> {phone}</p>
      <p><strong>Hora de Apertura: </strong>{scheduleFrom}</p>
      <p><strong>Hora de Cierre: </strong> {scheduleTo}</p>
      <p><strong>Pago Mínimo: </strong>${deposit}</p>
      <button
        type="button"
      >
        Editar
      </button>
    </div>
  )
}
