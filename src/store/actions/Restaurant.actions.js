import  axios from 'axios'
import swal from 'sweetalert'
import {
  RESTAURANT_LOADING,
  RESTAURANT_SUCCESS,
  RESTAURANT_FAILURE,
  RESTAURANT_FINISHED,
  RESTAURANT_NAME,
  RESTAURANT_EMAIL,
  RESTAURANT_LOGO,
  RESTAURANT_ADDRESS,
  RESTAURANT_PHONE,
  RESTAURANT_SCHEDULE_FROM,
  RESTAURANT_SCHEDULE_TO,
  RESTAURANT_NIT,
  RESTAURANT_DEPOSIT,
  MENU_ID,
  SET_SEARCH,
} from '../reducers/Restaurant.reducer'

export function getName( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_NAME, payload})
  }
}
export function getEmail( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_EMAIL, payload})
  }
}
export function getLogo( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_LOGO, payload})
  }
}
export function getAddress( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_ADDRESS, payload})
  }
}
export function getPhone( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_PHONE, payload})
  }
}
export function getScheduleFrom( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_SCHEDULE_FROM, payload})
  }
}
export function getScheduleTo( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_SCHEDULE_TO, payload})
  }
}
export function getNit( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_NIT, payload})
  }
}
export function getDeposit( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_DEPOSIT, payload})
  }
}
export function setSearch( payload ) {
  return function ( dispatch ) {
    dispatch({ type: SET_SEARCH, payload})
  }
}

export function getProfile() {
  return async function (dispatch) {
    const token = localStorage.getItem('token')
    dispatch({ type: RESTAURANT_LOADING})
    try {
      const { data: {data} } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/restaurants/profile',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: RESTAURANT_NAME, payload: data.name})
      dispatch({ type: RESTAURANT_EMAIL, payload: data.email})
      dispatch({ type: RESTAURANT_LOGO, payload: data.logo})
      dispatch({ type: RESTAURANT_ADDRESS, payload: data.address})
      dispatch({ type: RESTAURANT_PHONE, payload: data.phone})
      dispatch({ type: RESTAURANT_SCHEDULE_FROM, payload: data.scheduleFrom})
      dispatch({ type: RESTAURANT_SCHEDULE_TO, payload: data.scheduleTo})
      dispatch({ type: RESTAURANT_NIT, payload: data.nit})
      dispatch({ type: RESTAURANT_DEPOSIT, payload: data.deposit})
      dispatch({ type: MENU_ID, payload: data.menu })
      localStorage.setItem('menu', data.menu)
    }catch(error) {
    dispatch({ type: RESTAURANT_FAILURE, payload: error})
  }finally {
    dispatch({ type: RESTAURANT_FINISHED})
  }
  }
}

export function postRestaurantProfile( data ) {
  const { name, email, address, phone, scheduleFrom, scheduleTo, nit, deposit} = data
  return async function(dispatch){
    const token = localStorage.getItem('token')
    dispatch({ type: RESTAURANT_LOADING})
    try {
      const { data: {data} } = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/restaurants',
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          name,
          email,
          address,
          phone,
          scheduleFrom,
          scheduleTo,
          nit,
          deposit
        },
      })
      dispatch({ type: RESTAURANT_NAME, payload: data.name})
      dispatch({ type: RESTAURANT_EMAIL, payload: data.email})
      dispatch({ type: RESTAURANT_ADDRESS, payload: data.address})
      dispatch({ type: RESTAURANT_PHONE, payload: data.phone})
      dispatch({ type: RESTAURANT_SCHEDULE_FROM, payload: data.scheduleFrom})
      dispatch({ type: RESTAURANT_SCHEDULE_TO, payload: data.scheduleTo})
      dispatch({ type: RESTAURANT_NIT, payload: data.nit})
      dispatch({ type: RESTAURANT_DEPOSIT, payload: data.deposit})
      swal("Perfil actualizado exitosamente", "", "success");
      return true
    }catch(error){
      dispatch({ type: RESTAURANT_FAILURE, payload: error})
      return false
    }finally {
      dispatch({ type: RESTAURANT_FINISHED})
    }
  }
}
