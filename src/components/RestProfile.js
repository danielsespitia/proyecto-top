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

const Form = styled.form `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 0px;
`;

const Label = styled.label `
  display: block;
`;

const Input = styled.input ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

const ContentButtons = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  padding-block-start: 40px;
`;

const ButtonUpdate = styled(ButtonPrimary)`
  margin-right: 50px;
`;

const ButtonCancel = styled(ButtonPrimary)`
  background-color: ${
    props => props.theme.tertiaryColor
  };
  &:hover {
    background-color: #E2DE5B;
    border: 1px solid ${
      props => props.theme.tertiaryColor
    };
  }
  margin-left: 50px;
`;

function RestProfile ({ 
  restaurantName, 
  address,
  email,
  phone,
  scheduleFrom,
  scheduleTo,
  deposit,
  nit,
  handleChange,
  handleSubmit,
  handleDeleteRestaurant,
})
{
  return (
    <Container>
      <SignUpData>
        <DataItem>
          <p><strong>Nombre:</strong></p>
          <p>{restaurantName}</p></DataItem>
        <DataItem>
          <p><strong>Correo Electrónico:</strong></p>
          <p>{email}</p>
        </DataItem>
      </SignUpData>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label><strong>Dirección</strong></Label>
          <Input
            className="Form__address-input"
            id="address"
            type="text"
            name="address"
            value={address}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Ej: Calle 5a #23-43"
            required
          />
        </div>
        <div>
          <Label><strong>Número de Teléfono</strong></Label>
          <Input
            className="Form__phone-input"
            id="phone"
            type="text"
            name="phone"
            value={phone}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Ej: 3203212345"
            required
          />
        </div>
        <div>
          <Label><strong>Hora de Apertura:</strong></Label>
          <Input
            className="Form__restaurantScheduleFrom-input"
            id="scheduleFrom"
            type="time"
            //min="11:00"
            //max="14:00"
            name="scheduleFrom"
            value={scheduleFrom}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Hora de Apertura"
            required
          />
        </div>
        <div>
          <Label><strong>Hora de Cierre</strong></Label>
          <Input
            className="Form__scheduleTo-input"
            id="scheduleTo"
            type="time"
            //min="20:00"
            //max="24:00"
            name="scheduleTo"
            value={scheduleTo}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Hora de Cierre"
            required
          />
        </div>
        <div>
          <Label><strong>NIT</strong></Label>
          <Input
            className="Form__nit-input"
            id="nit"
            type="text"
            name="nit"
            value={nit}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Ingresa tu NIT"
            required
          />
        </div>
        <div>
          <Label><strong>Pago Mínimo</strong></Label>
          <Input
            className="Form__deposit-input"
            id="deposit"
            type="number"
            min="20000"
            max="200000"
            step="10000"
            name="deposit"
            value={deposit}
            autoComplete="on"
            onChange={handleChange}
            required
          />
        </div>
        <ContentButtons>
          <ButtonUpdate
            className="ButtonUpdate"
            id="ButtonUpdate"
            type="submit"
            value="Actualizar"              
          >
          </ButtonUpdate>
          <ButtonCancel
            className="ButtonCancel"
            id="ButtonCancel"
            type="button"
            value="Eliminar Cuenta"
            onClick={handleDeleteRestaurant}
          >
          </ButtonCancel>
        </ContentButtons>
      </Form>
    </Container>
  )
}
export default RestProfile
