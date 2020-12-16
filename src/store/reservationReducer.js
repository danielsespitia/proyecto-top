import axios from 'axios'
const RESERVATION_LOADING = 'RESERVATION_LOADING'
const RESERVATION_SUCCESS = 'RESERVATION_SUCCESS'
const RESERVATION_FAILURE = 'RESERVATION_FAILURE'
const RESERVATION_FINISHED = 'RESERVATION_FINISHED'
const RESERVATION_DATA = 'RESERVATION_DATA'
export const RESTAURANT_ID_RESERVATION = 'RESTAURANT_ID_RESERVATION'
export const RESTAURANT_NAME_RESERVATION = 'RESTAURANT_NAME_RESERVATION'
export const RESTAURANT_DEPOSIT_RESERVATION = 'RESTAURANT_DEPOSIT_RESERVATION'
const RESERVATION_BRANCH = 'RESERVATION_BRANCH' 
const RESERVATION_DATE = 'RESERVATION_DATE' 
const RESERVATION_TIME = 'RESERVATION_TIME' 
const RESERVATION_RANGE = 'RESERVATION_RANGE' 
const RESERVATION_PEOPLE = 'RESERVATION_PEOPLE' 
const RESERVATION_AGREE = 'RESERVATION_AGREE' 

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
      
    } catch(error){
      dispatch({ type: RESERVATION_FAILURE, payload: error})
    }finally{
      dispatch({ type: RESERVATION_FINISHED})
    }
  }
}


const initialState = {
  id: '',
  name: '',
  deposit: 0,
  branch: '',
  date: '',
  time: '',
  range: '',
  people: '',
  agree: '',
  loading: false,
  error: null,
  restaurantList: []
}

function reservationReducer (state = initialState, action ) {
  switch (action.type) {
    case RESERVATION_DATA:
      return {
        ...state,
        restaurantList: action.payload 
      }
    case RESTAURANT_ID_RESERVATION:
      return {
        ...state,
        id: action.payload 
      }
    case RESTAURANT_NAME_RESERVATION:
      return {
        ...state,
        name: action.payload 
      }
    case RESTAURANT_DEPOSIT_RESERVATION:
      return {
        ...state,
        deposit: action.payload 
      }
    case RESERVATION_BRANCH:
      return {
        ...state,
        branch: action.payload
      }
    case RESERVATION_DATE:
      return {
        ...state,
        date: action.payload
      }
    case RESERVATION_TIME:
      return {
        ...state,
        time: action.payload
      }
    case RESERVATION_RANGE:
      return {
        ...state,
        range: action.payload
      }
    case RESERVATION_PEOPLE:
      return {
        ...state,
        people: action.payload
      }
    case RESERVATION_AGREE:
      return {
        ...state,
        agree: action.payload
      }
    case RESERVATION_LOADING:
      return {
        ...state,
        loading: true
      }
    case RESERVATION_SUCCESS:
      return {
        ...state,
        loading: action.payload
      }
    case RESERVATION_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case RESERVATION_FINISHED:
      return{
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reservationReducer
