import MiniLoading from '../MiniLoading';
import ButtonPrimary from '../styled/ButtonPrimary';
import { 
  ContainerRegisterForm,  
  H3,
  ParagraphInstruction,
  Form,
  Span,
  Paragraph,
  Checkbox,
  InputText,
  ContentButtons,
  ButtonCancel,
  ErrorSubmittion,
  Message,
} from './SanitaryRegisterStyles'

function SanitaryRegisterForm({
  question1SymptomsCovid,
  question2ContactWithPeople,
  question3InternationalTravel,
  question4HealthWorker,
  temperature,
  isUser,
  nameCompanion,
  handleChange,
  submitDataSanitary,
  handleCancel,
  message,
  errorMessage,
  loading,
})
{

  if(loading){
    return <MiniLoading/>
  }
  return(
    <ContainerRegisterForm>
        <Message>{message}</Message>
        <ErrorSubmittion>{errorMessage}</ErrorSubmittion>
        <H3>Autoevaluación para registro sanitario Covid19</H3>
        <ParagraphInstruction>Selecciona los recuadros según tu/su estado:</ParagraphInstruction>
        <Form onSubmit={submitDataSanitary}>
          <Span className="ContentQuestion">
            <Paragraph>He presentado sintomas relacionados con COVID19</Paragraph>
            <Checkbox
              className="response"
              id="question1SymptomsCovid"
              type="checkbox"
              name="question1SymptomsCovid"
              value={question1SymptomsCovid}
              checked={question1SymptomsCovid}
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
              checked={question2ContactWithPeople}
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
              checked={question3InternationalTravel}
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
              checked={question4HealthWorker}
              onChange={handleChange}
            >
            </Checkbox>
          </Span>
          <InputText
            className="Temperature"
            id="temperature"
            type="text"
            name="temperature"
            value={temperature}
            onChange={handleChange}
            placeholder="¿Cuál es mi/su temperatura?"
            required
          >
          </InputText>
          {isUser 
            ? ( null )
          : (
            <InputText
              className="Name_Companion"
              id="nameCompanion"
              type="text"
              name="nameCompanion"
              value={nameCompanion}
              onChange={handleChange}
              placeholder="Nombre de mi acompañante"
            >
            </InputText>
          )}
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
              type="reset"
              onClick={handleCancel}
              value="Cancelar"
            >
            </ButtonCancel>
          </ContentButtons>
        </Form>
      </ContainerRegisterForm>
  )
}

export default SanitaryRegisterForm