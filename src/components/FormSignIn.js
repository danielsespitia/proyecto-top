import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import ContainerContent from '../components/styled/ContainerContent'

const ContainerContentExtend = styled(ContainerContent)` 
  display: grid;
  grid-row-gap: 12px;
`;

const Form = styled.form ` 
  display: grid;
  grid-row-gap: 12px;
  margin-top: 12px;
`;

const ContainerButton = styled.span `
  text-align: center;
`;

const ButtonSecundary = styled(ButtonPrimary)`
  background-color: ${
    props => props.theme.secundaryColor
  };
  &:hover {
    background-color: ${
      props => props.theme.secundaryColorBlur
    };
    border: 1px solid ${
      props => props.theme.secundaryColor
    };
  }
`;

const Input = styled.input ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

const ContainerContentLabel = styled(ContainerButton)`
  display: block;
  margin-bottom: 12px;
`;

const ContainerText = styled.p`
  margin: 0;
`;

const Message = styled.span `
  font-size: 13px;
  color: #0f31dd;
  font-style: italic;
`;

export function FormSignIn ({
  email, 
  password,
  handleSubmit,
  handleChange,
  message
}) 
{
  return(
    <ContainerContentExtend>
      <h3>
        Queremos volverte a reunir con tus seres queridos, alrededor de tus comidas favoritas.
      </h3>
      <Form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
        >
          Correo electronico
        </label>
        <Input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          value={email}
          placeholder="Correo electronico"
          required
        />
        <label 
          htmlFor="password"
        >
          Contraseña
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          placeholder="***********"
          required
        />
        <ContainerButton className="Form__subtmit-span">
          <ButtonSecundary
            className="Form__submit-input"
            type="submit"
            value="Iniciar sesión"
          />
        </ContainerButton>
      </Form>
      <ContainerText as= {"span"}>
        <hr></hr>
      </ContainerText>
      <ContainerContentLabel>
        <ContainerText>Ó</ContainerText>
      </ContainerContentLabel>
      <ContainerContentLabel>
        <ButtonPrimary as= {Link} to="/sign-up">
          Crear cuenta
        </ButtonPrimary>
      </ContainerContentLabel>
      <Message>{message}</Message>
    </ContainerContentExtend>
  )
} 