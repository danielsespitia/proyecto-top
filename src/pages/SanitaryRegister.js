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
  const [loading, setLoading] = useState(false)


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
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/sanitary-register',
        data: { 
          temperature,
          question1SymptomsCovid, 
          question2ContactWithPeople,
          question3InternationalTravel,
          question4HealthWorker,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Registro sanitario actualizado exitosamente')
      setLoading(false)
    } catch (err) {
      setErrorSubmittion('No pudimos envíar tu formulario')
      setLoading(false)
    }
  };

  const handleCancel = (e) => {
    setTemperature('')
    setQuestion1SymptomsCovid(false)
    setQuestion2ContactWithPeople(false)
    setQuestion3InternationTravel(false)
    setQuestion4HealthWorker(false)
    setMessage('Recuerda diligenciar tu temperatura actual')
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
        loading = {loading}
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegister