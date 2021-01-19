import axios from 'axios';

import { 
  RESERVATION_LOADING,
  RESERVATION_FAILURE,
  RESERVATION_DATA,
  RESERVATION_FINISHED,
} from '../reducers/ClientReservation.reducer'

export function getReservationData ( payload ) {
  return function ( dispatch ) {
    dispatch({ RESERVATION_DATA, payload })
  }
}
export function getListReservation() {
  return async function ( dispatch ) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESERVATION_LOADING })
    try{
      const { data: {data} } = await axios ({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/clients/reservations',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: RESERVATION_DATA, payload: data })
    }catch(error) {
      dispatch({ type: RESERVATION_FAILURE, payload: error })
    }finally{
      dispatch({ type: RESERVATION_FINISHED })
    }
  }
}