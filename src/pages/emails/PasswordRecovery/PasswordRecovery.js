import React, { useState } from 'react'
import { PasswordRecoveryForm } from '../../../components/emails/PasswordRecovery/PasswordRecoveryForm'
import axios from 'axios'

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
      //localStorage.setItem( 'token', token )
      //localStorage.setItem( 'pathUser', pathUser )
      //this.context.isAuthenticated(token, pathUser)
      setMessage( 'Correo de recuperacion de contraseña enviado correctamente' )
    }catch(error){
      setMessage( 'Correo no existe en alamesa' )
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
