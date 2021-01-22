import {
  ContainerContentExtend,
  Form,
  Input,
  ContainerContentLabel,
  InputContainer,
  Article,
  SelectForm,
  Label
}

from './Styles/PasswordRecoveryFormStyles'
import ButtonPrimary from '../../styled/ButtonPrimary'

export function PasswordRecoveryForm ({
  email, 
  userType,
  handleSubmit,
  handleChange,
}) 
{
  return(
    <ContainerContentExtend>
      <Form 
        onSubmit={handleSubmit}
        id="recoveryPass"
      >
        <InputContainer>
        <Label
          htmlFor="email"
        >
          Ingresa tu correo electronico
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Correo electronico"
          required
        />
        </InputContainer>
        <InputContainer>
          <Label className="label-user-type"
            htmlFor="userType"
          >
          Tipo de Usuario
          </Label>
          <Article>
            <SelectForm
              className="user-type-select"
              name="userType"
              id="userType"
              form="recoveryPass"
              value={userType}
              onChange={ handleChange }
              required
            > 
            <option
              value="" disabled selected
            >
              Selecciona Usuario
            </option>
            <option
              value='clients'
            >
              Cliente
            </option>
            <option
              value='restaurants'
            >
              Restaurante
            </option>
            </SelectForm>
          </Article>
        </InputContainer>
        <ContainerContentLabel>
          <ButtonPrimary
            type="submit"
            value='Recuperar contraseña'
          />
        </ContainerContentLabel>
      </Form>
    </ContainerContentExtend>
  )
} 
