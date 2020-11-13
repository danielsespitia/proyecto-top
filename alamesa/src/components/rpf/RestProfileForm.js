import styled from "styled-components";
import ContainerContent from '../styled/ContainerContent';
import ButtonPrimary from '../styled/ButtonPrimary';

const RestLogo = styled.img `
  width: 100px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form ` 
  display: grid;
  grid-row-gap: 12px;
`;

const Input = styled.input ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

const ContainerButton = styled.span `
  text-align: center;
`;

function RestProfileForm({
  restaurantName,
  address,
  phone,
  scheduleFrom,
  scheduleTo,
  deposit,
  handleSubmit,
  handleChange,
}) {
  return (
    <ContainerContent>
      <h3>Bienvenido a #Alamesa</h3>
      <RestLogo 
        src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
        alt="logo"
      />
      <Form
        onSubmit={handleSubmit}
        className="Form"
      >
        <label
          className="Form__restaurantname-label"
          htmlFor="restaurantName"
        >
          Nombre del Restaurante 
        </label>
        <Input
          className="Form__restaurantname-input"
          id="restaurantName"
          type="text"
          name="restaurantName"
          onChange={handleChange}
          value={restaurantName}
        />
        <label
          className="Form__address-label"
          htmlFor="address"
        >
          Dirección 
        </label>
        <Input
          className="Form__address-input"
          id="address"
          type="text"
          name="address"
          onChange={handleChange}
          value={address}
        />
        <label
          className="Form__phone-label"
          htmlFor="phone"
        >
          Teléfono 
        </label>
        <Input
          className="Form__phone-input"
          id="phone"
          type="text"
          name="phone"
          onChange={handleChange}
          value={phone}
        />
        <label
          className="Form__schedulefrom-label"
          htmlFor="scheduleFrom"
        >
          Hora de Apertura
        </label>
        <Input
          className="Form__schedulefrom-input"
          id="scheduleFrom"
          type="time"
          min="11:00"
          max="14:00"
          name="scheduleFrom"
          onChange={handleChange}
          value={scheduleFrom}
        />
        <label
          className="Form__scheduleto-label"
          htmlFor="scheduleTo"
        >
          Hora de Cierre
        </label>
        <Input
          className="Form__scheduleto-input"
          id="scheduleTo"
          type="time"
          min="20:00"
          max="24:00"
          name="scheduleTo"
          onChange={handleChange}
          value={scheduleTo}
        />
        <label
          className="Form__deposit-label"
          htmlFor="deposit"
        >
          Pago Mínimo 
        </label>
        <Input
          className="Form__deposit-input"
          id="deposit"
          type="number"
          min="20000"
          max="200000"
          step="10000"
          name="deposit"
          onChange={handleChange}
          value={deposit}
        />
        <ContainerButton className="Form__subtmit-span">
          <ButtonPrimary
            className="Form__submit-input"
            type="submit"
            value="Guardar Cambios"
          />
        </ContainerButton>
      </Form>
    </ContainerContent>
  )
}

export default RestProfileForm