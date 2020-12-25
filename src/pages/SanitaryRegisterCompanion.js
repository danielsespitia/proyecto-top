import ModalCompanion from '../components/Modals/ModalCompanion'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm';
import {
  getQuestionOneC,
  getQuestionTwo,
  getQuestionThree,
  getQuestionFour,
  getTemperature,
  getNameCompanion,
  createSanitaryRegister,
  cancelSendForm,
} from '../store/actions/SanitaryRegisterCompanion.actions'
import { useDispatch, useSelector } from "react-redux";

function SanitaryRegisterCompanion() {

  const dispatch = useDispatch()

  const data= useSelector((
    { sanitaryRegisterCompanionReducer: {
      question1SymptomsCovidC,
    }}) => {
      return { question1SymptomsCovidC }
      
    })

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch(name) {
      case 'question1SymptomsCovidC': 
        dispatch(getQuestionOneC(checked))
        break;
      case 'question2ContactWithPeople':
        dispatch(getQuestionTwo(checked))
        break;
      case 'question3InternationalTravel':
        dispatch(getQuestionThree(checked))
        break;
      case 'question4HealthWorker':
        dispatch(getQuestionFour(checked))
        break;
      case 'temperature':
        dispatch(getTemperature(value))
        break;
      case 'nameCompanion':
        dispatch(getNameCompanion(value))
        break;
      default: break;
    }
  };

  // const submitDataSanitary = (e) => {
  //   e.preventDefault()
  //   dispatch(createSanitaryRegister( dataSanitaryCompanion ))
  // };

  const handleCancel = () => {
    dispatch(cancelSendForm())
  };

  return (
    <ModalCompanion>
      <SanitaryRegisterForm
        question1SymptomsCovid = {data.question1SymptomsCovidC} 
        // question2ContactWithPeople = {dataSanitaryCompanion.question2ContactWithPeople}
        // question3InternationalTravel  =  {dataSanitaryCompanion.question3InternationalTravel}
        // question4HealthWorker = {dataSanitaryCompanion.question4HealthWorker}
        // temperature = {dataSanitaryCompanion.temperature}
        // nameCompanion = {dataSanitaryCompanion.nameCompanion}
        handleChange = {handleChange}
        // submitDataSanitary = {submitDataSanitary}
        handleCancel = {handleCancel}
        // errorSubmittion = {dataSanitaryCompanion.errorMessage}
        // message = {dataSanitaryCompanion.message}
        // loading = {dataSanitaryCompanion.loading}
        isUser = {false}
      >
      </SanitaryRegisterForm>
    </ModalCompanion>
  )
}

export default SanitaryRegisterCompanion