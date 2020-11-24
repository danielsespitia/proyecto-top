import styled from "styled-components";
import Desktopstructure from './styled/DesktopStructure'
import ButtonPrimary from './styled/ButtonPrimary';

const RestLogo = styled.img `
  width: 100px;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BodyRight = styled.div ` 
  grid-area: bodyRight;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

const Form = styled.form `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`;

const FormItem = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

const Input = styled.input ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

const ContentButtons = styled.div`
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

function RestProfileForm({
  restaurantName,
  address,
  email,
  phone,
  scheduleFrom,
  scheduleTo,
  deposit,
  nit,
  handleSubmit,
  handleChange,
}) {
  return (
    <Desktopstructure>
      <BodyLeft>
        <H3>Configura tu Perfil</H3>
        <RestLogo 
          src="https://dcassetcdn.com/design_img/3714052/132070/22421534/g6w956bcvm8q74y7q6r2g5nvx1_image.jpg"
          alt="logo"
        />
      </BodyLeft>
      <BodyRight>
        <Form
          onSubmit={handleSubmit}
          className="Form"
        >
          <FormItem>
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
          </FormItem>
          <FormItem>
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
          </FormItem>
          <FormItem>
            <label
              className="Form__email-label"
              htmlFor="phone"
            >
              Correo Electrónico 
            </label>
            <Input
              className="Form__email-input"
              id="email"
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </FormItem>
          <FormItem>
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
          </FormItem>
          <FormItem>
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
          </FormItem>
          <FormItem>
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
          </FormItem>
          <FormItem>
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
          </FormItem>
          <FormItem>
            <label
              className="Form__nit-label"
              htmlFor="nit"
            >
              NIT 
            </label>
            <Input
              className="Form__nit-input"
              id="nit"
              type="text"
              name="nit"
              onChange={handleChange}
              value={nit}
            />
          </FormItem>
        </Form>
        <ContentButtons className="Form__submit-span">
          <ButtonUpdate
            className="Form__submit-input"
            type="submit"
            value="Actualizar"
          />
          <ButtonCancel
            className="ButtonCancel"
            id="ButtonCancel"
            type="submit"
            value="Cancelar"
          />
        </ContentButtons>
      </BodyRight>
    </Desktopstructure>
  )
}

export default RestProfileForm