import React from 'react'
import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import axios from 'axios'

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

class FormSignUp extends React.Component {
  state = {
    id: 1,
    name: '',
    lastName: '',
    email:'',
    password: '',
    confirmPassword: '',
    userType: 'clients',
    terms: false,
    errors: {},
  };

  handleChange = (e) => {
    const { name, value, type, checked} = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if(this.validate()) {
      
      this.setState({
        name: '',
        password: '',
        confirmPassword: '',
        email:'',
        userType: '',
        terms: false,
      })
    }  
    
    try {
      const { name, password, email, userType, terms } = this.state;
      const isUserType = userType === 'clients' ? 'clients' : 'restaurants'; 
      const { data: { token } } = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8080',
        url: `/${isUserType}/sign-up`,
        data: { name, password, email, terms }
      });
      
      localStorage.setItem('token', token)
    } catch(err) {
      this.state.errors['account'] = 'Usuario invalido, no se creo cuenta'
    }
    
    const pathUser = this.state.userType === 'clients' ? 'client-profile' : 'restaurant-profile';
    this.props.history.push(`${pathUser}`);
  };

  validate() {
    const { password, confirmPassword, errors} = this.state;
    const arePasswordEqual = !!password && !!confirmPassword && password === confirmPassword;

    if( !arePasswordEqual ) {
      errors['password'] = 'La contraseña no coincide';
    }

    this.setState( {errors} );
  };

  render () {
    const { name, email, password, confirmPassword, userType, terms} = this.state
    return (
      <ContainerContent>
        <h3>Bienvenido a #Alamesa</h3>
        <Form onSubmit={this.handleSubmit.bind(this)}>
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder="***********"
            required
          />
          <Error>{this.state.errors.password}</Error>
          
          <label
            className="Form__userType-label"
          >
            Tipo de Usuario:
          </label>
          <Select
            id="userType"
            name="userType"
            value={userType}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}

export default FormSignUp