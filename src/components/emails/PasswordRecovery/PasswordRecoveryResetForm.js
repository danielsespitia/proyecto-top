import ButtonPrimary from '../../../components/styled/ButtonPrimary'
import {
  ContainerContentExtend,
  Form,
  ContainerButton,
  Input,
  ContainerContentLabel,
  Message,
} from './Styles/PasswordRecoveryResetStyles'

export function PasswordRecoveryResetForm ({
  password, 
  newPassword,
  message,
  handleSubmit,
  handleChange,
}) 
{

  return(
    <ContainerContentExtend>
      <Message>{message}</Message>
      <Form onSubmit={handleSubmit}>
        <label
          htmlFor="password"
        >
          Ingresa tu nueva constraseña
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          placeholder="Confirma tu constraseña"
          required
        />
        <label
          htmlFor="newPassword"
        >
          Confirma tu constraseña
        </label>
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          onChange={handleChange}
          value={newPassword}
          placeholder="Confirma tu constraseña"
          required
        />
        <ContainerContentLabel>
          <ButtonPrimary
            type="submit"
            value='Reestablecer constraseña'
          />
        </ContainerContentLabel>
      </Form>
    </ContainerContentExtend>
  )
} 
