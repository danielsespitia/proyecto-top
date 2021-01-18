import {
  ContainerContentExtend,
  Form,
  Input,
  ContainerContentLabel,
  Message
}

from './Styles/PasswordRecoveryFormStyles'
import ButtonPrimary from '../../styled/ButtonPrimary'


export function PasswordRecoveryForm ({
  email, 
  handleSubmit,
  handleChange,
}) 
{
  return(
    <ContainerContentExtend>
      <Form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
        >
          Ingresa tu correo electronico
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Correo electronico"
          required
        />
        <ContainerContentLabel>
          <ButtonPrimary
            type="submit"
            value='Recuperar constraseña'
          />
        </ContainerContentLabel>
      </Form>
    </ContainerContentExtend>
  )
} 
