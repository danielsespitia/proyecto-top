import axios from 'axios'
import swal from 'sweetalert';
import {
CLIENT_LOADING,
CLIENT_SUCCESS,
CLIENT_FAILURE,
CLIENT_FINISHED,
CLIENT_ID,
CLIENT_NAME,
CLIENT_LASTNAME,
CLIENT_EMAIL,
CLIENT_IMAGE,
CLIENT_ADDRESS,
CLIENT_PHONE,
CLIENT_IDENTIFICATION,
CLIENT_BIRTHDAY,
CLIENT_ID_TYPE,
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
export function setClientImage( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_IMAGE, payload })
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
export function setClientIdentification( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_IDENTIFICATION, payload })
  }
}
export function setClientBirthday( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CLIENT_BIRTHDAY, payload })
  }
}
export function setClientIdType( payload ) {
  return function ( dispatch ){
    dispatch({ type: CLIENT_ID_TYPE, payload })
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
      dispatch({ type: CLIENT_NAME, payload: data.name})
      dispatch({ type: CLIENT_LASTNAME, payload: data.lastName})
      dispatch({ type: CLIENT_EMAIL, payload: data.email})
      dispatch({ type: CLIENT_IMAGE, payload: data.image})
      dispatch({ type: CLIENT_ADDRESS, payload: data.address})
      dispatch({ type: CLIENT_PHONE, payload: data.phone})
      dispatch({ type: CLIENT_IDENTIFICATION, payload: data.identification})
      dispatch({ type: CLIENT_BIRTHDAY, payload: data.birthday})
      dispatch({ type: CLIENT_ID_TYPE, payload: data.idType})
      dispatch({ type: CLIENT_SUCCESS})
    }catch(error) {
      dispatch({ type: CLIENT_FAILURE, payload: error})
    }finally {
      dispatch({ type: CLIENT_FINISHED})
    }
  }
}
export function updateClient( data ) {
  const { name, lastName, email, address, phone, identification, birthday, idType} = data
  return async function (dispatch) {
    const token = localStorage.getItem('token')
    dispatch({ type: CLIENT_LOADING})
    try {
      const resp = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/clients`,
        data: {
          name,
          lastName,
          email,
          address,
          phone,
          identification,
          birthday, 
          idType,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      swal("Perfil actualizado exitosamente", "", "success");
    }catch(err) {
      swal("Tu perfil no pudo ser actualizado", "", "error");
    }

  }
}
