import React from 'react' 
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import ContainerContent from '../components/styled/ContainerContent'

const Form = styled.form ` 
  display: grid;
  grid-row-gap: 12px;
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

const LinkCreateAccount = styled.a`
  border-radius: 4px;
  font-size: 16px;
  background-color: ${
    props => props.theme.primaryColor
  };
  color: white;
  padding: 8px 14px;
  font-weight: 400;
`;

const Input = styled.input ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;
class FormSignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {

  };

  handleChange = (e) => {

  };

  render() {
    const { email, password } = this.state
    return(
      <ContainerContent>
        <Form onSubmit={this.handleSubmit}>
          <label
            htmlFor="email"
          >
            Correo electronico
          </label>
          <Input
            id="email"
            name="email"
            type="text"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
        <hr></hr>
        <p>O</p>
        <LinkCreateAccount to='/sing-up'>
          Iniciar sesión
        </LinkCreateAccount>
      </ContainerContent>
    )
  }
}

export default FormSignIn