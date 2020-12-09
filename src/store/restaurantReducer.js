import  axios from 'axios'
import swal from 'sweetalert'
const RESTAURANT_LOADING = 'RESTAURANT_LOADING' 
const RESTAURANT_SUCCESS = 'RESTAURANT_SUCCESS'
const RESTAURANT_FAILURE = "RESTAURANT_FAILURE"
const RESTAURANT_FINISHED = "RESTAURANT_FINISHED"

const RESTAURANT_NAME = 'RESTAURANT_NAME'
const RESTAURANT_EMAIL = 'RESTAURANT_EMAIL'
const RESTAURANT_ADDRESS = 'RESTAURANT_ADDRESS'
const RESTAURANT_PHONE = 'RESTAURANT_PHONE'
const RESTAURANT_SCHEDULE_FROM = 'RESTAURANT_SCHEDULE_FROM'
const RESTAURANT_SCHEDULE_TO = 'RESTAURANT_SCHEDULE_TO'
const RESTAURANT_NIT = 'RESTAURANT_NIT'
const RESTAURANT_DEPOSIT = 'RESTAURANT_DEPOSIT'


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

const token = localStorage.getItem('token')
export function getProfile() {
  return async function (dispatch) {
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
      dispatch({ type: RESTAURANT_ADDRESS, payload: data.address})
      dispatch({ type: RESTAURANT_PHONE, payload: data.phone})
      dispatch({ type: RESTAURANT_SCHEDULE_FROM, payload: data.scheduleFrom})
      dispatch({ type: RESTAURANT_SCHEDULE_TO, payload: data.scheduleTo})
      dispatch({ type: RESTAURANT_NIT, payload: data.nit})
      dispatch({ type: RESTAURANT_DEPOSIT, payload: data.deposit})
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

const initialState = {
  
  loading: false,
  error: null,

}


function restaurantReducer (state = initialState, action ) {
  switch (action.type) {
    case RESTAURANT_NAME:
      return {
        ...state, 
        name: action.payload
      }
    case RESTAURANT_EMAIL:
      return {
        ...state, 
        email: action.payload
      }
    case RESTAURANT_ADDRESS:
      return {
        ...state, 
        address: action.payload
      }
    case RESTAURANT_PHONE:
      return {
        ...state, 
        phone: action.payload
      }
    case RESTAURANT_SCHEDULE_FROM:
      return {
        ...state, 
        scheduleFrom: action.payload
      }
    case RESTAURANT_SCHEDULE_TO:
      return {
        ...state, 
        scheduleTo: action.payload
      }
    case RESTAURANT_NIT:
      return {
        ...state, 
        nit: action.payload
      }
    case RESTAURANT_DEPOSIT:
      return {
        ...state, 
        deposit: action.payload
      }
    case RESTAURANT_LOADING:
      return {
        ...state,
        loading: true
      }
    case RESTAURANT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case RESTAURANT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case RESTAURANT_FINISHED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
export default restaurantReducer
