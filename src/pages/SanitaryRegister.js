import { useState } from 'react'
import { SanitaryRegisterForm } from '../components/SanitaryRegisterForm'
import Modal from '../components/Modal'

function SanitaryRegister() {

  const [question1SymptomsCovid, setQuestion1SymptomsCovid] = useState(false)
  const [question2ContactWithPeople, setQuestion2ContactWithPeople] = useState(false)
  const [question3InternationalTravel, setQuestion3InternationTravel] = useState(false)
  const [question4HealthWorker, setQuestion4HealthWorker] = useState(false)
  const [temperature, setTemperature] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
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
        
      >
      </SanitaryRegisterForm>
    </Modal>
  )
}

export default SanitaryRegister