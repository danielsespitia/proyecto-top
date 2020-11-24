import styled from 'styled-components';

const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
  text-align: left;
`;

const DataItem = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

function RestProfile ( { restaurantName, address, email, phone, scheduleFrom, scheduleTo, deposit, nit } ) {
  return (
    <Container>
      <DataItem><strong>Nombre:</strong>{restaurantName}</DataItem>
      <DataItem><strong>Dirección: </strong> {address}</DataItem>
      <DataItem><strong>Correo Electrónico:</strong> {email}</DataItem>
      <DataItem><strong>Teléfono:</strong> {phone}</DataItem>
      <DataItem><strong>Hora de Apertura:</strong> {scheduleFrom}</DataItem>
      <DataItem><strong>Hora de Cierre:</strong> {scheduleTo}</DataItem>
      <DataItem><strong>Pago Mínimo:</strong> ${deposit}</DataItem>
      <DataItem><strong>NIT:</strong> {nit}</DataItem>
    </Container>
  )
}
export default RestProfile