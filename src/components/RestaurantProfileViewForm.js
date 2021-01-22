import styled from 'styled-components';
import ButtonPrimary from '../components/styled/ButtonPrimary';

const Container = styled.div `
  display: grid;
  grid-template-rows: 20% 80%;
  grid-gap: 20px 60px;
  text-align: left;
`;

const SignUpData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DataItem = styled.div`
  grid-row-gap: 5px;
`;

const ContentButtons = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  padding-block-start: 40px;
`;

const ButtonUpdate = styled(ButtonPrimary)`
`;

function RestaurantProfileViewForm ({ 
  restaurantName, 
  address,
  email,
  phone,
  scheduleFrom,
  scheduleTo,
  deposit,
  nit,
  handleClick,
})
{
  return (
    <Container>
      <SignUpData>
        <DataItem>
          <p><strong>Nombre:</strong></p>
          <p>{restaurantName}</p>
        </DataItem>
        <DataItem>
          <p><strong>Correo Electrónico:</strong></p>
          <p>{email}</p>
        </DataItem>
        <DataItem>
          <p><strong>Dirección:</strong></p>
          <p>{address}</p>
        </DataItem>
        <DataItem>
          <p><strong>Número de Teléfono:</strong></p>
          <p>{phone}</p>
        </DataItem>
        <DataItem>
          <p><strong>Hora de Apertura:</strong></p>
          <p>{scheduleFrom}</p>
        </DataItem>
        <DataItem>
          <p><strong>Hora de Cierre:</strong></p>
          <p>{scheduleTo}</p>
        </DataItem>
        <DataItem>
          <p><strong>NIT: </strong></p>
          <p>{nit}</p>
        </DataItem>
        <DataItem>
          <p><strong>Pago Mínimo:</strong></p>
          <p>${deposit}</p>
        </DataItem>
        <ContentButtons>
          <ButtonUpdate
            className="ButtonUpdate"
            id="ButtonUpdate"
            type="button"
            value="Editar tu Perfil"
            onClick={handleClick}        
          >
          </ButtonUpdate>
        </ContentButtons>
      </SignUpData>
    </Container>
  )
}
export default RestaurantProfileViewForm
