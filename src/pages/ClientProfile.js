import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Desktopstructure from '../components/styled/DesktopStructure'
import ButtonPrimary from '../components/styled/ButtonPrimary'
import axios from 'axios'


const BodyLeft = styled.div ` 
  grid-area: bodyLeft;
  display: grid;
  grid-row-gap: 25px; 
  padding: 50px 0;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BodyRight = styled.div ` 
  grid-area: bodyRight;
  padding: 50px 60px;
  background-color: ${
    props => props.theme.grayColorOverlay
  };
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

const Lnk = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`;

const Lnk__a = styled.a`
  font-size: 16px;
  color: #2F80ED;
  text-decoration-line: underline;
`;

const PhotoClient = styled.img `
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`;

const Form__item = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

const Input = styled.input ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

const Select = styled.select ` 
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  font-size: 16px;
  color: #6c757d;
`;

const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-block-start: 40px;
`;

const ButtonUpdate = styled(ButtonPrimary)`
      margin-right: 50px;
`;

const ButtonCancel = styled(ButtonPrimary)`
  background-color: ${
    props => props.theme.tertiaryColor
  };
  &:hover {
      background-color: #E2DE5B;
      border: 1px solid ${
        props => props.theme.tertiaryColor
      };
  }
  margin-left: 50px;
`;
class ClientProfile extends React.Component{

  state = {
    data: {},
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080',
        url: '/clients/profile',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ data })
      //console.log('data del component didmount', data)
    } catch(err) {
      localStorage.removeItem('token');
      this.props.history.push('/')
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value === '' ? '' : this.state.data
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render(){
    const { name } = this.state
    console.log('data en el render',name)
    console.log('solo name::', name)

    return(
      <>
            <Desktopstructure>
              <BodyLeft>
                <H3>Configura tu Perfil</H3>
                <Lnk> 
                  <Lnk__a href="sanitary-register">Registro Sanitario</Lnk__a>
                </Lnk>
                <PhotoClient 
                  src=""
                  alt="Foto Del Cliente"
                />
              </BodyLeft>
              <BodyRight>
                <Form>
                  <Form__item>
                    <label>Nombre</label>
                    <Input
                      className="Form__clientname-input"
                      id="clientName"
                      type="text"
                      name="clientName"
                      autoComplete="on"
                      //value={data.name}
                      onChange={this.handleChange}
                      placeholder="Nombre*"
                      required
                    />
                  </Form__item>
                  <Form__item>
                    <label>Apellido</label>
                    <Input
                      className="Form__lastname-input"
                      id="lastName"
                      type="text"
                      name="lastName"
                      autoComplete="on"
                      onChange={this.handleChange}
                      placeholder="Apellido*"
                      required
                    />
                  </Form__item>
                  <Form__item>
                    <label>Correo electrónico</label>
                    <Input
                      className="Form__email-input"
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="on"
                      onChange={this.handleChange}
                      placeholder="Correo electrónico*"
                      required
                    />
                  </Form__item>
                  <Form__item>
                    <label>Dirección</label>
                    <Input
                      className="Form__address-input"
                      id="address"
                      type="text"
                      name="address"
                      value="{address}"
                      autoComplete="on"
                      onChange={this.handleChange}
                      placeholder="Dirección"
                    />
                  </Form__item>
                  <Form__item>
                    <label>Número de telefono</label>
                    <Input
                      className="Form__phone-input"
                      id="phone"
                      type="text"
                      name="phone"
                      value="{phone}"
                      autoComplete="on"
                      onChange={this.handleChange}
                      placeholder="Número de telefono"
                    />
                  </Form__item>
                  <Form__item>
                    <label>Número de identificación</label>
                    <Input
                      className="Form__identification-input"
                      id="identification"
                      type="text"
                      name="identification"
                      value="{identification}"
                      autoComplete="on"
                      onChange={this.handleChange}
                      placeholder="Número de identificación"
                    />
                  </Form__item>
                  <Form__item>
                    <label>Fecha de Nacimiento:</label>
                    <Input
                      className="Form__birthday-input"
                      id="birthday"
                      type="date"
                      name="birthday"
                      value="{birthday}"
                      autoComplete="on"
                      onChange={this.handleChange}
                      required
                    />
                  </Form__item>
                  <Form__item>
                    <label>Metodo de pago</label>
                    <Select
                      id="payType"
                      name="payType"
                      onChange={this.handleChange}
                      required
                >   
                      <option value="{payType}">
                        Efectivo
                      </option>
                      <option value="{payType}">
                        PayU
                      </option>
                    </Select>
                  </Form__item>
                </Form>
                <ContentButtons>
                  <ButtonUpdate
                    className="ButtonUpdate"
                    id="ButtonUpdate"
                    type="submit"
                    onSubmit={this.handleSubmit}
                    value="Actualizar"
                  >
                  </ButtonUpdate>
                  <ButtonCancel
                    className="ButtonCancel"
                    id="ButtonCancel"
                    type="submit"
                    onSubmit={this.handleSubmit}
                    value="Cancelar"
                  >
                  </ButtonCancel>
                </ContentButtons>
              </BodyRight>
            </Desktopstructure>
      </>
    )}
}

export default ClientProfile
