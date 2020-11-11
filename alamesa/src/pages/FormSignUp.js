import React from 'react'
import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'
import ButtonPrimary from '../components/styled/ButtonPrimary'

const Main = styled(ContainerContent)` 
`
const Form = styled.form ` 
  display: grid;
  grid-row-gap: 12px;
`

const Input = styled.input ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`
const Select = styled.select ` 
  padding: 10.5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: #6c757d;
`
const ContainerTerms = styled.span ` 
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-size: 14px;
`
const ContainerButton = styled.span `
  text-align: center;
`

const Button = styled(ButtonPrimary)` 
`

class FormSignUp extends React.Component {
  state = {
    id: 1,
    name: '',
    lastName: '',
    email:'',
    password: '',
    confirm_password: '',
    userType: '',
    terms: false,
    errors: {},
  };

  handleChange = (e) => {
    const { name, value, type, checked} = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.validate()) {
      console.log(this.state);

      this.setState({
        name: '',
        password: '',
        confirm_password: '',
        email:'',
        userType: '',
        terms: false,
      })
    }
  }

  validate() {
    let errors = {};
    let input = this.state.name;

    if( typeof input['password'] !== undefined && typeof input['confirm_password'] !== undefined) {

      if( input['password'] !== input['confirm_password']) {
        errors['password'] = 'La contraseña no coincide';
      }
    }
  }

  render () {
    const { name, email, password, confirm_password, userType, terms} = this.state
    return (
      <Main>
        <h3>Bienvenido a #Alamesa</h3>
        <Form onSubmit={this.handleSubmit}>
          <label
            className='Form__name-label'
            htmlFor='name'
          >
            Nombre
          </label>
          <Input
            className='Form__name-input'
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            placeholder='Nombre'
            required
          />
          <label
            className='Form__email-label'
            htmlFor='email'
          >
            Correo electrónico
          </label>
          <Input
            className='Form__email-input'
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Correo electronico'
            required
          />
          <label
            className='Form__password-label'
            htmlFor='password'
          >
            Contraseña
          </label>
          <Input
            className='Form__password-input'
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='******'
            required
          />
          <label
            className='Form__password-label'
            htmlFor='password'
          >
            Confirmar contraseña
          </label>
          <Input
            className='Form__password-input'
            id='confirm_password'
            type='password'
            name='confirm_password'
            value={confirm_password}
            onChange={this.handleChange}
            placeholder='******'
            required
          />
          <span>{this.state.errors.confirm_password}</span>
          
          <label
            className='Form__userType-label'
          >Tipo de Usuario:
          </label>
          <Select
            id='userType'
            name='userType'
            value={userType}
            onChange={this.handleChange}
            required
          >
            <option value='cliente'>
              Cliente
            </option>
            <option value='restaurante'>
              Restaurante
            </option>
          </Select>
          <ContainerTerms>
          <label
            className='Form__terms-label'
            htmlFor='terms'
          >
            Acepto los Términos y Condiciones
          </label>
          <input
            className='Form__terms-input'
            id='terms'
            type='checkbox'
            name='terms'
            value={terms}
            onChange={this.handleChange}
            required
          />
          </ContainerTerms>
          <ContainerButton className='Form__subtmit-span'>
            <Button
              className='Form__submit-input'
              type='submit'
              value='Crear una cuenta'
            />
          </ContainerButton>
        </Form>
      </Main>
    )
  }
}

export default FormSignUp