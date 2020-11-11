import styled from 'styled-components'

const Button = styled.input ` 
background-color: ${props => props.theme.primaryColor};
padding: 5px 20px;
border-radius: 4px;
color: white;
font-weight: 400;
`

function ButtonCreateAccount() {
  <Button
    className='Form__submit-input'
    type='submit'
    value='Enviar'
  />
}

export default ButtonCreateAccount