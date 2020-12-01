import styled from 'styled-components'
import ContainerContent from './styled/ContainerContent'
import ButtonPrimary from './styled/ButtonPrimary'

const ContainerRegisterForm = styled(ContainerContent)`
  width: 280px;
  padding: 30px;
`;

const Form = styled.form`
  display: grid;
  justify-content: center;
  grid-row-gap: 10px;
`;

const H3 = styled.h3`
  text-align: center;
`;

const ParagraphInstruction = styled.p`
  font-size: 14px;
`;

const Paragraph = styled.p`
  font-size: 11px;
  color: #2F80ED;
  width: 150px;
`;

const Span = styled.span ` 
  width: 274px;
  padding: 20px;
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
  margin: 15px 0;
  padding: 9px;
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
  };
`;

export function SanitaryRegisterForm({
  question1SymptomsCovid,
  question2ContactWithPeople,
  question3InternationalTravel,
  question4HealthWorker,
  temperature,
  handleChange,
  handleSubmit,
  handleCancel,
})
{
  return(
      <ContainerRegisterForm>
        <H3>Autoevaluación para registro sanitario Covid19</H3>
        <ParagraphInstruction>Selecciona los recuadros según tu estado:</ParagraphInstruction>
        <Form onSubmit={handleSubmit}>
          <Span className="ContentQuestion">
            <Paragraph>He presentado sintomas relacionados con Covid19</Paragraph>
            <Checkbox
              className="response"
              id="question1SymptomsCovid"
              type="checkbox"
              name="question1SymptomsCovid"
              value={question1SymptomsCovid}
              onChange={handleChange}
            >
            </Checkbox>
          </Span>
          <Span className="ContentQuestion">
            <Paragraph>He estado en contacto con personas con sintomas de Covid19</Paragraph>
            <Checkbox
              className="response"
              id="question2ContactWithPeople"
              type="checkbox"
              name="question2ContactWithPeople"
              value={question2ContactWithPeople}
              onChange={handleChange}
            >
            </Checkbox>
          </Span>
          <Span className="ContentQuestion"> 
            <Paragraph>Hice un viaje internacional en los ultimos 30 días</Paragraph>
            <Checkbox
              className="response"
              id="question3InternationalTravel"
              type="checkbox"
              name="question3InternationalTravel"
              value={question3InternationalTravel}
              onChange={handleChange}
            >
            </Checkbox>
          </Span>
          <Span className="ContentQuestion">
            <Paragraph>Soy trabajador de la salud</Paragraph>
            <Checkbox
              className="response"
              id="question4HealthWorker"
              type="checkbox"
              name="question4HealthWorker"
              value={question4HealthWorker}
              onChange={handleChange}
            >
            </Checkbox>
          </Span>
          <Temperature
            className="Temperature"
            id="temperature"
            type="text"
            name="temperature"
            value={temperature}
            onChange={handleChange}
            placeholder="Cual es mi temperatura"
          >
          </Temperature>
          <ContentButtons>
            <ButtonPrimary
              className="ButtonUpdate"
              id="ButtonUpdate"
              type="submit"
              value="Actualizar"
            >
            </ButtonPrimary>
            <ButtonCancel
              className="ButtonCancel"
              id="ButtonCancel"
              type="button"
              onClick={handleCancel}
              value="Cancelar"
            >
            </ButtonCancel>
          </ContentButtons>
        </Form>
      </ContainerRegisterForm>
  )
}
