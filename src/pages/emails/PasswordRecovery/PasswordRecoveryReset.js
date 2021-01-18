import React, { useState } from 'react'
import { PasswordRecoveryResetForm } from '../../../components/emails/PasswordRecovery/PasswordRecoveryResetForm'
import axios from 'axios'

function PasswordRecoveryReset() {

  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value)
        break;
      case 'confirmEmail':
        setConfirmEmail(value)
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
        data: { email }
      });
      //localStorage.setItem( 'token', token )
      //localStorage.setItem( 'pathUser', pathUser )
      //this.context.isAuthenticated(token, pathUser)
      setMessage( 'Correo de recuperacion de contraseña enviado correctamente' )
    }catch(error){
      setMessage( 'Correo no existe en alamesa' )
    }
  };

  return(
    <PasswordRecoveryResetForm
      message={message}
      email={email}
      confirmEmail={confirmEmail}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default PasswordRecoveryReset
