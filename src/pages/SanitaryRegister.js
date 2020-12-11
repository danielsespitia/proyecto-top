import { useState, useDispatch } from 'react'
import { createSanitaryRegister, handleChange } from '../store/sanitaryRegisterReducer'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm'
import Modal from '../components/Modal'


function SanitaryRegister({
  question1SymptomsCovid,
  question2ContactWithPeople,
  question3InternationalTravel,
  question4HealthWorker,
  temperature,
  message,
  errorSubmittion,
}) {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  function handleSubmit (e) {
    e.preventDefault();
    setLoading(true)
    const created = dispatch(createSanitaryRegister({ 
      question1SymptomsCovid, 
      question2ContactWithPeople,
      question3InternationalTravel, 
      question4HealthWorker, 
      temperature }))
    if(created) {
      setLoading(false)
    }
    console.log(temperature)
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
        question1SymptomsCovid = {question1SymptomsCovid} 
        question2ContactWithPeople = {question2ContactWithPeople}
        question3InternationalTravel  =  {question3InternationalTravel}
        question4HealthWorker = {question4HealthWorker}
        temperature = {temperature}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        handleCancel = "{handleCancel}"
        errorSubmittion = {errorSubmittion}
        messageSuccessfully = {message}
        messageTemperature = {message}
        loading = {loading}
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegister