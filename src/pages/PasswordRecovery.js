import React, { useState } from 'react'
import { PasswordRecoveryForm } from '../components/PasswordRecovery/PasswordRecoveryForm'
import axios from 'axios'

function PasswordRecovery() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clic en pass reco con mail', email)
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
  console.log('estado', email)

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value)
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
