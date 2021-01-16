import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonPrimary from '../../../components/styled/ButtonPrimary'
import ContainerContent from '../../../components/styled/ContainerContent'

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
  margin-bottom: 20px;
  margin-top: 20px;
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

const Message = styled.span `
  font-size: 13px;
  color: #0f31dd;
  font-style: italic;
`;

export function PasswordRecoveryResetForm ({
  email, 
  emailConfirm,
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
          Ingresa tu nueva constraseña
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Nueva constraseña"
          required
        />
        <label
          htmlFor="emailConfirm"
        >
          Confirma tu constraseña
        </label>
        <Input
          id="emailConfirm"
          name="emailConfirm"
          type="emailConfirm"
          onChange={handleChange}
          value={emailConfirm}
          placeholder="Confirma tu constraseña"
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
