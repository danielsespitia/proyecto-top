import {
  Container,
  SignUpData,
  Form,
  Label,
  Input,
  ContentButtons,
  ButtonUpdate,
  ButtonCancel,
} from './RestauranStyles';

function RestaurantProfileForm ({ 
  name, 
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
      </SignUpData>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label><strong>Nombre</strong></Label>
          <Input
            className="Form__name-input"
            id="name"
            type="text"
            name="name"
            value={name}
            autoComplete="on"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label><strong>Correo Electrónico</strong></Label>
          <Input
            className="Form__email-input"
            id="email"
            type="email"
            name="email"
            value={email}
            autoComplete="on"
            onChange={handleChange}
            required
          />
        </div>
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
export default RestaurantProfileForm
