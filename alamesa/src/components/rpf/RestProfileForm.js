import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

const Button = styled.button`
  display: block;
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
    <form
      onSubmit={handleSubmit}
      className="Form"
    >
      <span>
        <Label
          className="Form__restaurantname-label"
          htmlFor="restaurantName"
        >
          Nombre del Restaurante 
        </Label>
        <input
          className="Form__restaurantname-input"
          id="restaurantName"
          type="text"
          name="restaurantName"
          onChange={handleChange}
          value={restaurantName}
        />
      </span>
      <span>
        <Label
          className="Form__address-label"
          htmlFor="address"
         >
          Dirección 
        </Label>
        <input
          className="Form__address-input"
          id="address"
          type="text"
          name="address"
          onChange={handleChange}
          value={address}
        />
      </span>
      <span>
        <Label
          className="Form__phone-label"
          htmlFor="phone"
         >
          Teléfono 
        </Label>
        <input
          className="Form__phone-input"
          id="phone"
          type="text"
          name="phone"
          onChange={handleChange}
          value={phone}
        />
      </span>
      <span>
        <Label
          className="Form__schedulefrom-label"
          htmlFor="scheduleFrom"
        >
          Hora de Apertura
        </Label>
        <input
          className="Form__schedulefrom-input"
          id="scheduleFrom"
          type="time"
          min="11:00"
          max="14:00"
          name="scheduleFrom"
          onChange={handleChange}
          value={scheduleFrom}
          />
        <Label
          className="Form__scheduleto-label"
          htmlFor="scheduleTo"
        >
          Hora de Cierre
        </Label>
        <input
          className="Form__scheduleto-input"
          id="scheduleTo"
          type="time"
          min="18:00"
          max="20:00"
          name="scheduleTo"
          onChange={handleChange}
          value={scheduleTo}
        />
      </span>
      <span>
        <Label
          className="Form__deposit-label"
          htmlFor="deposit"
        >
          Pago Mínimo 
        </Label>
        <input
          className="Form__deposit-input"
          id="deposit"
          type="number"
          min="$20000"
          max="$200000"
          step="10000"
          name="deposit"
          onChange={handleChange}
          value={deposit}
        />
      </span>
      <Button>Confirmar Cambios</Button>
    </form>
  )
}

export default RestProfileForm