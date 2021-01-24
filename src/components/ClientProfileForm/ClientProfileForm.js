import { AuthContext } from '../../store/AuthContext'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import Desktopstructure from '../styled/DesktopStructure'
import SanitaryRegister from '../../pages/SanitaryRegister'
import { 
  BodyLeft,
  BodyRight,
  H3,
  TextSanitaryRegister,
  LinkToSanitaryRegister,
  PhotoClient,
  Form,
  FormItem,
  Input,
  Select,
  ContentButtons,
  ButtonUpdate,
  ButtonCancel,
  ImageButton,
} from './ClientProfileFormStyles'

export function ClientProfileForm({
  handleChange,
  handleSubmit,
  handleDeleteClient,
  handleChangeImage,
  handleSubmitImage,
  image,
  hiddenButton,
})
{
  const register = useContext(AuthContext)

  const data = useSelector(
    ({clientReducer: {
      ...state
    }}) => {
      return { ...state }
  })

  return(
    <Desktopstructure>
      <BodyLeft>
        <H3>Configura tu Perfil</H3>
        <TextSanitaryRegister> 
          <LinkToSanitaryRegister 
            type='button'
            onClick={register.onOpenModal}
          >Registro Sanitario</LinkToSanitaryRegister>
          <SanitaryRegister
          />
        </TextSanitaryRegister>
        <form onSubmit={handleSubmitImage}>
          <label htmlFor="file">
            <PhotoClient 
              src={image}
              alt="Foto Del Cliente"
            />
          </label>
          <div>
            <input
              hidden
              type="file"
              accept="image/*"
              name="file"
              id="file"
              onChange={handleChangeImage}
            />
            <ImageButton
              hidden={hiddenButton}
              type="submit"
              value="Confirmar imagen"
            >
            </ImageButton>
          </div>
        </form>
      </BodyLeft>
      <BodyRight>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            <label>Nombre</label>
            <Input
              className="Form__clientname-input"
              id="name"
              type="text"
              name="name"
              value={data.name}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Nombre*"
              required
            />
          </FormItem>
          <FormItem>
            <label>Apellido</label>
            <Input
              className="Form__lastname-input"
              id="lastName"
              type="text"
              name="lastName"
              value={data.lastName}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Apellido"
            />
          </FormItem>
          <FormItem>
            <label>Correo electrónico</label>
            <Input
              className="Form__email-input"
              id="email"
              type="email"
              name="email"
              value={data.email}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
            />
          </FormItem>
          <FormItem>
            <label>Dirección</label>
            <Input
              className="Form__address-input"
              id="address"
              type="text"
              name="address"
              value={data.address}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Dirección"
            />
          </FormItem>
          <FormItem>
            <label>Número de telefono</label>
            <Input
              className="Form__phone-input"
              id="phone"
              type="text"
              name="phone"
              value={data.phone}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Número de telefono"
            />
          </FormItem>
          <FormItem>
            <label>Fecha de Nacimiento:</label>
            <Input
              className="Form__birthday-input"
              id="birthday"
              type="date"
              name="birthday"
              value={data.birthday}
              autoComplete="on"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <label>Tipo de documento</label>
            <Select
              id="idType"
              name="idType"
              value={data.idType}
              onChange={handleChange}
              required
            >   
              <option value="CC">
                Cédula de ciudadania CC
              </option>
              <option value="CE">
                Cédula de extranjería CE
              </option>
              <option value="PPN">
                Pasaporte PPN
              </option>
              <option value="NIT">
                Identificación Tributaría NIT
              </option>
              <option value="TI">
                Tarjeta de identidad TI
              </option>
            </Select>
          </FormItem>
          <FormItem>
            <label>Número de identificación</label>
            <Input
              className="Form__identification-input"
              id="identification"
              type="text"
              name="identification"
              value={data.identification}
              autoComplete="on"
              onChange={handleChange}
              placeholder="Número de identificación"
            />
          </FormItem>
          <ContentButtons>
            <ButtonUpdate
              className="ButtonUpdate"
              id="ButtonUpdate"
              type="submit"
              value="Actualizar"              
            >
            </ButtonUpdate>
            <ButtonCancel
              className="ButtonCancel"
              id="ButtonCancel"
              type="button"
              value="Eliminar Cuenta"
              onClick={handleDeleteClient}
            >
            </ButtonCancel>
          </ContentButtons>
        </Form>
      </BodyRight>
    </Desktopstructure>
  )
}


