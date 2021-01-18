import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { PasswordRecoveryResetForm } from '../../../components/emails/PasswordRecovery/PasswordRecoveryResetForm'
import axios from 'axios'
import swal from 'sweetalert'

function PasswordRecoveryReset() {

  const { token } = useParams()
  const history = useHistory()

  const [password, setPassword] = useState('')
  const [newPassword, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'password':
        setPassword(value)
        break;
      case 'newPassword':
        setPasswordConfirm(value)
        break;
      default: break;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{ 
      await axios ({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/email/recovery-reset`,
        data: { newPassword },
        headers: {
          Authorization: `Bearer ${ token }`
        }
      });
      swal('Contraseña reestablecida correcamente!','','success')
      history.push('/sign-in')
    }catch(error){
      setMessage(error)
      swal('No se logro reestablecer la constraseña','','error')
    }
  };

  return(
    <PasswordRecoveryResetForm
      password={password}
      newPassword={newPassword}
      handleSubmit={handleSubmit} 
      handleChange={handleChange} />
  )
}

export default PasswordRecoveryReset
