import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'
import ButtonPrimary from '../components/styled/ButtonPrimary'

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
const Select = styled.select ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: #6c757d;
`;
const ContainerTerms = styled.span ` 
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size: 14px;
`;
const ContainerButton = styled.span `
  text-align: center;
`;

const Error = styled.span `
  font-size: 12px;
  color: red;
  font-style: italic;
`;

export function FormSignUp ({ 
  name, 
  email, 
  password, 
  confirmPassword, 
  userType, 
  terms,
  handleChange,
  handleSubmit,
  errorsPassword,
  errorsAcount,
}) 
{
  return (
    <ContainerContent>
      <h3>Bienvenido a #Alamesa</h3>
      <Error>{errorsAcount}</Error>
      <Form onSubmit={handleSubmit}>
        <label
          className="Form__name-label"
          htmlFor="name"
        >
          Nombre
        </label>
        <Input
          className="Form__name-input"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <label
          className="Form__email-label"
          htmlFor="email"
        >
          Correo electrónico
        </label>
        <Input
          className="Form__email-input"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Correo electronico"
          required
        />
        <label
          className="Form__password-label"
          htmlFor="password"
        >
          Contraseña
        </label>
        <Input
          className="Form__password-input"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="***********"
          required
        />
        <label
          className="Form__password-label"
          htmlFor="confirmPassword"
        >
          Confirmar contraseña
        </label>
        <Input
          className="Form__password-input"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="***********"
          required
        />
        <Error>{errorsPassword}</Error>
        
        <label
          className="Form__userType-label"
        >
          Tipo de Usuario:
        </label>
        <Select
          id="userType"
          name="userType"
          value={userType}
          onChange={handleChange}
          required
        >
          <option value="clients">
            Cliente
          </option>
          <option value="restaurants">
            Restaurante
          </option>
        </Select>
        <ContainerTerms>
        <label
          className="Form__terms-label"
          htmlFor="terms"
        >
          Acepto los Términos y Condiciones
        </label>
        <input
          className="Form__terms-input"
          id="terms"
          type="checkbox"
          name="terms"
          value={terms}
          onChange={handleChange}
          required
        />
        </ContainerTerms>
        <ContainerButton className="Form__subtmit-span">
          <ButtonPrimary
            className="Form__submit-input"
            type="submit"
            value="Crear una cuenta"
          />
        </ContainerButton>
      </Form>
    </ContainerContent>
  )
}
