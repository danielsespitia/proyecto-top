import axios from 'axios'
import swal from 'sweetalert';
import {
  RESERVATION_LOADING,
  RESERVATION_SUCCESS,
  RESERVATION_FAILURE,
  RESERVATION_FINISHED,
  RESERVATION_DATA,
  RESTAURANT_ID_RESERVATION,
  RESTAURANT_NAME_RESERVATION,
  RESTAURANT_DEPOSIT_RESERVATION,
  RESERVATION_BRANCH,
  RESERVATION_DATE,
  RESERVATION_TIME,
  RESERVATION_RANGE,
  RESERVATION_PEOPLE,
  RESERVATION_AGREE
} from '../reducers/Reservation.reducer'

export function setBranch( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESERVATION_BRANCH, payload })
  }
}
export function setDate( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESERVATION_DATE, payload })
  }
}
export function setTime( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESERVATION_TIME, payload })
  }
}
export function setRange( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESERVATION_RANGE, payload })
  }
}
export function setPeople( payload ) {
  return function ( dispatch ){
    dispatch({ type: RESERVATION_PEOPLE, payload })
  }
}
export function setAgree( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESERVATION_AGREE, payload })
  }
}

export function getListRestaurants() {
  return async function ( dispatch ) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESERVATION_LOADING})
    try {
      const { data: {data} } = await axios ({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/restaurants/',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: RESERVATION_SUCCESS})
      dispatch({ type: RESERVATION_DATA, payload: data})
    }catch(error) {
      dispatch({ type: RESERVATION_FAILURE, payload: error})
    }finally {
      dispatch({ type: RESERVATION_FINISHED})
    }
  }
}
export function getRestaurant() {
  return async function (dispatch ) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESERVATION_LOADING })
    try {
      const restaurant = await axios ({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/restaurant/profile`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: RESERVATION_SUCCESS})
    }catch(error){
      dispatch({ type: RESERVATION_FAILURE, payload: error })
    }finally{
      dispatch({ type: RESERVATION_FINISHED})
    }
  }
} 

export function createReservation(data) {
  const { id, branch, date, time, range, people } = data
  return async function (dispatch) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESERVATION_LOADING})
    try {
      await axios ({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url:`/reservations/${id}`, 
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { branch, date, time, range, people }
      })
        dispatch({ type: RESERVATION_SUCCESS})
        swal('Reserva creda exitosamente!', '', 'success')
    } catch(error){
        dispatch({ type: RESERVATION_FAILURE, payload: error})
        swal('Hubo un error tu reserva no pudo ser creada', '', 'error')
    }finally{
      dispatch({ type: RESERVATION_FINISHED})
    }
  }
}
