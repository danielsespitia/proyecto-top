import { useState } from 'react'
import { 
  getQuestionOne,
  getQuestionTwo,
  getQuestionThree,
  getQuestionFour,
  getTemperature,
  createSanitaryRegister, 
  handleChange 
} from '../store/sanitaryRegisterReducer'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'


function SanitaryRegister() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  
  const dataSanitary = useSelector((
    { sanitaryRegisterReducer: { 
      ...state 
    }}) => {
    return { ...state }
  })

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSanitaryRegister( dataSanitary ))
  };

  // const handleCancel = (e) => {
  //   setTemperature('')
  //   setQuestion1SymptomsCovid(false)
  //   setQuestion2ContactWithPeople(false)
  //   setQuestion3InternationTravel(false)
  //   setQuestion4HealthWorker(false)
  //   setMessage({ temperature: 'Recuerda diligenciar tu temperatura actual' })
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   axios({
  //     method:'GET',
  //     baseURL:'http://localhost:8080',
  //     url: '/sanitary-register/:sanitaryRegisterId',
  //     headers:{
  //       Authorization: `Baerer ${token}`,
  //     }
  //   })
  //   .then(( {data: {data} }) => {
  //     setTemperature(data.temperature);
  //     setQuestion1SymptomsCovid(data.question1SymptomsCovid);
  //     setQuestion2ContactWithPeople(data.question2ContactWithPeople);
  //     setQuestion3InternationTravel(data.question3InternationalTravel);
  //     setQuestion4HealthWorker(data.question4HealthWorker);
  //   })
  //   .catch(err => {
  //     setErrorSubmittion('Estamos teniendo problemas de conexión')
  //   })
  // })

  return (
    <Modal>
      <SanitaryRegisterForm
        question1SymptomsCovid = {dataSanitary.question1SymptomsCovid} 
        question2ContactWithPeople = {dataSanitary.question2ContactWithPeople}
        question3InternationalTravel  =  {dataSanitary.question3InternationalTravel}
        question4HealthWorker = {dataSanitary.question4HealthWorker}
        temperature = {dataSanitary.temperature}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        handleCancel = "{handleCancel}"
        errorSubmittion = {dataSanitary.errorSubmittion}
        messageSuccessfully = {dataSanitary.message}
        messageTemperature = {dataSanitary.message}
        loading = {loading}
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegister