import { useEffect } from 'react'
import { 
  getQuestionOne,
  getQuestionTwo,
  getQuestionThree,
  getQuestionFour,
  getTemperature,
  createSanitaryRegister, 
  cancelSendForm,
  getData,
  updateData,
} from '../store/actions/SanitaryRegister.actions'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'


function SanitaryRegister() {
  
  const dispatch = useDispatch()

  const dataSanitary = useSelector((
    { sanitaryRegisterReducer: { 
      ...state 
    }}) => {
      return { ...state }
    })

  useEffect(() => {
    dispatch(getData())
  }, [getData])
    
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch(name) {
      case 'question1SymptomsCovid': 
        dispatch(getQuestionOne(checked))
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
      default: break;
    }
  };

  const submitDataSanitary = (e) => {
    e.preventDefault()
    if(!dataSanitary.canExistData) {
      dispatch(createSanitaryRegister( dataSanitary ))
    } else {
      dispatch(updateData( dataSanitary ))
    }
  };

  const handleCancel = () => {
    dispatch(cancelSendForm())
  };

  return (
    <Modal>
      <SanitaryRegisterForm
        question1SymptomsCovid = {dataSanitary.question1SymptomsCovid} 
        question2ContactWithPeople = {dataSanitary.question2ContactWithPeople}
        question3InternationalTravel  =  {dataSanitary.question3InternationalTravel}
        question4HealthWorker = {dataSanitary.question4HealthWorker}
        temperature = {dataSanitary.temperature}
        handleChange = {handleChange}
        submitDataSanitary = {submitDataSanitary}
        handleCancel = {handleCancel}
        errorSubmittion = {dataSanitary.errorMessage}
        message = {dataSanitary.message}
        loading = {dataSanitary.loading}
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegister