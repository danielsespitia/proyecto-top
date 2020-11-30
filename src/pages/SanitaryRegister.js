import React from 'react'
import { SanitaryRegisterForm } from '../components/SanitaryRegisterForm'
import Modal from '../components/Modal'

class SanitaryRegister extends React.Component {

  state = {
    question1SymptomsCovid: false,
    question2ContactWithPeople: false,
    question3InternationalTravel: false,
    question4HealthWorker: false,
    temperature: '',
  }

  handleChange = (e) => {
    const { name, type, value, checked} = e.target
      this.setState({
        [name]: type === 'checkbox' ? checked : value
      })
  };

  handleSubmit = (e) => {
    e.preventDefault()
  };

  handleCancel = (e) => {
    e.preventDefault()
  }
  render() {
    const {
      question1SymptomsCovid,
      question2ContactWithPeople,
      question3InternationalTravel,
      question4HealthWorker,
      temperature,
    } = this.state
    return (
      <Modal>
        <SanitaryRegisterForm
          question1SymptomsCovid = {question1SymptomsCovid} 
          question2ContactWithPeople = {question2ContactWithPeople}
          question3InternationalTravel  =  {question3InternationalTravel}
          question4HealthWorker = {question4HealthWorker}
          temperature = {temperature}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit.bind(this)}
          handleCancel = {this.handleCancel.bind(this)}
          
        >
        </SanitaryRegisterForm>
      </Modal>
    )
  }
}

export default SanitaryRegister