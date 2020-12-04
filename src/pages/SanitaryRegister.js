import { useState } from 'react'
import SanitaryRegisterForm from '../components/SanitaryRegister/SanitaryRegisterForm'
import Modal from '../components/Modal'
import axios from 'axios'


function SanitaryRegister() {
  
  const [question1SymptomsCovid, setQuestion1SymptomsCovid] = useState(false)
  const [question2ContactWithPeople, setQuestion2ContactWithPeople] = useState(false)
  const [question3InternationalTravel, setQuestion3InternationTravel] = useState(false)
  const [question4HealthWorker, setQuestion4HealthWorker] = useState(false)
  const [temperature, setTemperature] = useState('')
  const [errorSubmittion, setErrorSubmittion] = useState('')
  const [message, setMessage] = useState('')


  const handleChange = (e) => {
    const { name, value, checked} = e.target
    switch (name) {
      case 'question1SymptomsCovid':
        setQuestion1SymptomsCovid(checked)
        break;
      case 'question2ContactWithPeople':
        setQuestion2ContactWithPeople(checked)
        break;
      case 'question3InternationalTravel':
        setQuestion3InternationTravel(checked)
        break;
      case 'question4HealthWorker':
        setQuestion4HealthWorker(checked)
        break;
      case 'temperature':
        setTemperature(value)
        break;
      default: break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const response = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url: '/sanitary-register/',
        data: { 
          question1SymptomsCovid, 
          question2ContactWithPeople,
          question3InternationalTravel,
          question4HealthWorker,
          temperature
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setMessage('Registro sanitario actualizado exitosamente')
    } catch (err) {
      setErrorSubmittion('No pudimos envíar tu formulario')
    }
  };

  const handleCancel = (e) => {
    e.preventDefault()
  };

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
        handleCancel = {handleCancel}
        errorSubmittion = {errorSubmittion}
        message = {message}
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegister