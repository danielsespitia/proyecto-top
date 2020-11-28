import React from 'react'
import styled from 'styled-components'
import ContainerContent from '../components/styled/ContainerContent'
import ButtonPrimary from '../components/styled/ButtonPrimary'



const ContainerList = styled(ContainerContent)`
  display: grid;
  justify-content: center;
  grid-row-gap: 10px;
`;

const H3 = styled.h3`
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 14px;
`;

const Paragraph = styled.p`
  font-size: 11px;
  color: #2F80ED
`;

const Span = styled.span ` 
  background-color: ${
    props => props.theme.blueColorSan
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;  
`;

const Checkbox = styled.input`
  border: 1px solid #CED4DA;
  box-sizing: border-box;
  border-radius: 2px;
`;

const Temperature = styled.input`
  background: white;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  border-color: ${
    props => props.theme.grayColorMore
  };
`;

const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
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
`;


class SanitaryRegister extends React.Component {

  state = {
    response1: false,
    response2: false,
    response3: false,
    response4: false,
    temperature: '',
  };

  handleChange = (e) => {
    const { name, type, value, checked} = e.target
      this.setState({
        [name]: type === 'checkbox' ? checked : value
      })
  };

  handleSubmit = (e) => {
    e.preventDefault()
  };

  render() {
    const { response1, response2, response3, response4, temperature } = this.state
    return (
      <ContainerList>
        <H3>Registro Sanitario</H3>
        <H4>Selecciona los recuadros según tu estado:</H4>
        <Span className="ContentQuestion">
          <Paragraph>He presentado sintomas relacionados con Covid19</Paragraph>
          <Checkbox
            className="response"
            id="response1"
            type="checkbox"
            name="response1"
            value={response1}
            onChange={this.handleChange}
          >
          </Checkbox>
        </Span>
        <Span className="ContentQuestion">
          <Paragraph>He estado en contacto con personas con sintomas de Covid19</Paragraph>
          <Checkbox
            className="response"
            id="response2"
            type="checkbox"
            name="response2"
            value={response2}
            onChange={this.handleChange}
          >
          </Checkbox>
        </Span>
        <Span className="ContentQuestion"> 
      <Span className="ContentQuestion"> 
        <Span className="ContentQuestion"> 
      <Span className="ContentQuestion"> 
        <Span className="ContentQuestion"> 
      <Span className="ContentQuestion"> 
        <Span className="ContentQuestion"> 
          <Paragraph>Hice un viaje internacional en los ultimos 30 días</Paragraph>
          <Checkbox
            className="response"
            id="response3"
            type="checkbox"
            name="response3"
            value={response3}
            onChange={this.handleChange}
          >
          </Checkbox>
        </Span>
        <Span className="ContentQuestion">
          <Paragraph>Soy trabajador de la salud</Paragraph>
          <Checkbox
            className="response"
            id="response4"
            type="checkbox"
            name="response4"
            value={response4}
            onChange={this.handleChange}
          >
          </Checkbox>
        </Span>
        <Temperature
          className="Temperature"
          id="temperature"
          type="text"
          name="temperature"
          value={temperature}
          onChange={this.handleChange}
          placeholder="Cual es mi temperatura"
        >
        </Temperature>
        <ContentButtons>
          <ButtonPrimary
            className="ButtonUpdate"
            id="ButtonUpdate"
            type="submit"
            onSubmit={this.handleSubmit}
            value="Actualizar"
          >
          </ButtonPrimary>
          <ButtonCancel
            className="ButtonCancel"
            id="ButtonCancel"
            type="submit"
            onSubmit={this.handleSubmit}
            value="Cancelar"
          >
          </ButtonCancel>
        </ContentButtons>
      </ContainerList>
    )
  }
}

export default SanitaryRegister