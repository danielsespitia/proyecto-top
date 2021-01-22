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
  RESTAURANT_MENU_ID,
  RESERVATION_BRANCH,
  RESERVATION_DATE,
  RESERVATION_TIME,
  RESERVATION_RANGE,
  RESERVATION_PEOPLE,
  RESERVATION_AGREE
} from '../reducers/Reservation.reducer'

export function setRestaurantId( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_ID_RESERVATION, payload })
  }
}
export function setRestaurantName( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_NAME_RESERVATION, payload })
  }
}
export function setRestaurantDeposit( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_DEPOSIT_RESERVATION, payload })
  }
}
export function setRestaurantMenuId( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_MENU_ID, payload })
  }
}
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
  const { idRestaurantReservation, branch, date, time, range, people } = data
  return async function (dispatch) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESERVATION_LOADING})
    try {
      const { data: { _id }} = await axios ({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url:`/reservations/${idRestaurantReservation}`, 
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { branch, date, time, range, people }
      })
        dispatch({ 
          type: RESERVATION_SUCCESS, 
          payload: 'Hemos recibido tu reserva, estamos alistando tu mesa'
        })
        localStorage.setItem('reservation', _id)
    } catch(error){
        localStorage.removeItem('reservation')
        dispatch({ type: RESERVATION_FAILURE, payload: error})
    }finally{
      dispatch({ type: RESERVATION_FINISHED})
    }
  }
}

export function removeReservation() {
  return async function (dispatch) {
    const token = localStorage.getItem(('token'))
    const idReservation = localStorage.getItem('reservation')
    dispatch ({ type: RESERVATION_LOADING})
    try {
      await axios ({
        method: 'DELETE', 
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/reservations/${idReservation}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ 
        type: RESERVATION_SUCCESS,
        payload: 'La reserva fue cancelada'
      })
      swal('Tu reserva fue cancelada', '', 'info')
    } catch(error){
        dispatch({ type: RESERVATION_FAILURE, payload: error})
    } finally {
      dispatch({ type: RESERVATION_FINISHED})
      localStorage.removeItem('reservation')
    }
  }
}
