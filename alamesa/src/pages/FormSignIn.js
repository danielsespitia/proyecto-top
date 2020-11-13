import React from 'react' 
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import ContainerContent from '../components/styled/ContainerContent'

const data = [
  {
    id: uuidv4(),
    email: 'ejemplo@gmail.com',
    password: '1234',
  },

  {
    id: uuidv4(),
    email: 'ejemplo2@gmail.com',
    password: '12345',
  },
]

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

const Error = styled.span `
  font-size: 12px;
  color: red;
  font-style: italic;
`;

const Message = styled.span `
  font-size: 12px;
  color: green;
  font-style: italic;
`;
class FormSignIn extends React.Component {

  state = {
    data: data,
    errors: {},
    message: {},
  };

  handleSubmit = (e) => {
    e.preventDefaul();

    if(this.validated()) {
      this.setState({
        [this.state.message]: 'Estas logueado correctamente'
      })
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  validated(e) {
    const { value, type, email, password } = e.target;
    const { errors } = this.state;
    const emailAreEqual = email === this.state.email
    const passwordAreEqual = password === this.state.password;

    if(!emailAreEqual) {
      errors['email'] = 'Este correo no esta registrado';
    }
    if(!passwordAreEqual) {
      errors['password'] = 'Esta contraseña no coincide con tu usuario';
    }

    this.setState({errors})
  }

  render() {
    const { email, password } = this.state
    return(
      <ContainerContentExtend>
        <h3>
          Queremos volverte a reunir con tus seres queridos, alrededor de tus comidas favoritas.
        </h3>
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
          <Error>{this.state.errors.email}</Error>
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
          <Error>{this.state.errors.password}</Error>
          <ContainerButton className="Form__subtmit-span">
            <ButtonSecundary
              className="Form__submit-input"
              type="submit"
              value="Iniciar sesión"
            />
          </ContainerButton>
        </Form>
        <ContainerText>
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
        <Message>{this.state.message}</Message>
      </ContainerContentExtend>
    )
  }
}

export default FormSignIn