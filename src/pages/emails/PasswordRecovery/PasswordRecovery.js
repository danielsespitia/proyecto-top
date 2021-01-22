import React, { useState } from 'react'
import { PasswordRecoveryForm } from '../../../components/emails/PasswordRecovery/PasswordRecoveryForm'
import axios from 'axios'
import swal from 'sweetalert'

function PasswordRecovery() {

  const [email, setEmail] = useState('')
  const [userType, setUserType] = useState('clients')

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value)
        break;
      case 'userType':
        setUserType(value)
        break;
      default: break;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      await axios ({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/email/recovery-pass`,
        data: { email, userType }
      });
      swal('Te hemos enviado un correo de recuperacion de contraseña, por favor revisa tu correo','','success')
    }catch(error){
      swal('El email no existe en alamesa','','error')
    }
  };

  return(
    <PasswordRecoveryForm
      email={email}
      userType={userType}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default PasswordRecovery
