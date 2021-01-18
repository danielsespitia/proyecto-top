import React, { useState } from 'react'
import { PasswordRecoveryForm } from '../../../components/emails/PasswordRecovery/PasswordRecoveryForm'
import axios from 'axios'
import swal from 'sweetalert'

function PasswordRecovery() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value)
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      await axios ({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/email/recovery-pass`,
        data: { email }
      });
      swal('Te hemos enviado un correo de recuperacion de contraseña, por favor revisa tu correo','','success')
    }catch(error){
      swal('El email que ingresaste no existe en alamesa','','error')
    }
  };

  return(
    <PasswordRecoveryForm
      message={message}
      email={email}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default PasswordRecovery
