import axios from 'axios'
//import swal from 'sweetalert';
import {
CLIENT_LOADING,
CLIENT_SUCCESS,
CLIENT_FAILURE,
CLIENT_FINISHED,
CLIENT_ID,
CLIENT_NAME,
CLIENT_LASTNAME,
CLIENT_EMAIL,
CLIENT_ADDRESS,
CLIENT_PHONE,
CLIENT_BIRTHDAY,
CLIENT_PAYMENT_TYPE,
CLIENT_DATA
} from '../reducers/Client.reducer'

export function setClientId( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_ID, payload })
  }
}
export function setClientName( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_NAME, payload })
  }
}
export function setClientLastName( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_LASTNAME, payload })
  }
}
export function setClientEmail( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_EMAIL, payload })
  }
}
export function setClientAddress( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_ADDRESS, payload })
  }
}
export function setClientPhone( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_PHONE, payload })
  }
}
export function setClientBirthday( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_BIRTHDAY, payload })
  }
}
export function setClientPaymentType( payload ) {
  return function ( dispatch ){
    dispatch({ type: CLIENT_PAYMENT_TYPE, payload })
  }
}

export function getClient() {
  return async function ( dispatch ) {
    const token = localStorage.getItem('token')
    dispatch({ type: CLIENT_LOADING})
    try {
      const { data: {data} } = await axios ({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: 'clients/profile/',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: CLIENT_SUCCESS})
      dispatch({ type: CLIENT_DATA, payload: data})
    }catch(error) {
      dispatch({ type: CLIENT_FAILURE, payload: error})
    }finally {
      dispatch({ type: CLIENT_FINISHED})
    }
  }
}

