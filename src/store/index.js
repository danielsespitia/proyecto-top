import { createStore } from 'redux'

export const RESTAURANT_ID_RESERVATION = 'RESTAURANT_ID_RESERVATION'
export const RESTAURANT_NAME_RESERVATION = 'RESTAURANT_NAME_RESERVATION'
export const RESERVATION_BRANCH = 'RESERVATION_BRANCH' 
export const RESERVATION_DATE = 'RESERVATION_DATE' 
export const RESERVATION_TIME = 'RESERVATION_TIME' 
export const RESERVATION_RANGE = 'RESERVATION_RANGE' 
export const RESERVATION_PEOPLE = 'RESERVATION_PEOPLE' 
export const RESERVATION_AGREE = 'RESERVATION_AGREE' 

export const GET_RESTAURANT_NAME = 'GET_RESTAURANT_NAME'
export const GET_RESTAURANT_EMAIL = 'GET_RESTAURANT_EMAIL'
export const GET_RESTAURANT_ADDRESS = 'GET_RESTAURANT_ADDRESS'
export const GET_RESTAURANT_PHONE = 'GET_RESTAURANT_PHONE'
export const GET_RESTAURANT_SCHEDULEFROM = 'GET_RESTAURANT_SCHEDULEFROM'
export const GET_RESTAURANT_SCHEDULETO = 'GET_RESTAURANT_SCHEDULETO'
export const GET_RESTAURANT_DEPOSIT = 'GET_RESTAURANT_DEPOSIT'
export const GET_RESTAURANT_NIT = 'GET_RESTAURANT_NIT'

function reducer (state, action ) {
  switch (action.type) {
    case RESTAURANT_ID_RESERVATION:
      return {
        ...state,
        restaurantId: action.payload 
      }
    case RESTAURANT_NAME_RESERVATION:
      return {
        ...state,
        restaurantName: action.payload 
      }
    case RESERVATION_BRANCH:
      return {
        ...state,
        reservationBranch: action.payload
      }
    case RESERVATION_DATE:
      return {
        ...state,
        reservationDate: action.payload
      }
    case RESERVATION_TIME:
      return {
        ...state,
        reservationTime: action.payload
      }
    case RESERVATION_RANGE:
      return {
        ...state,
        reservationRange: action.payload
      }
    case RESERVATION_PEOPLE:
      return {
        ...state,
        reservationPeople: action.payload
      }
    case RESERVATION_AGREE:
      return {
        ...state,
        reservationAgree: action.payload
      }


    case GET_RESTAURANT_NAME:
      return {
        ...state,
        name: action.payload
      }
    case GET_RESTAURANT_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case GET_RESTAURANT_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    case GET_RESTAURANT_PHONE:
      return {
        ...state,
        phone: action.payload
      }
    case GET_RESTAURANT_SCHEDULEFROM:
      return {
        ...state,
        scheduleFrom: action.payload
      }
    case GET_RESTAURANT_SCHEDULETO:
      return {
        ...state,
        scheduleTo: action.payload
      }
    case GET_RESTAURANT_DEPOSIT:
      return {
        ...state,
        deposit: action.payload
      }
    case GET_RESTAURANT_NIT:
      return {
        ...state,
        nit: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  restaurantId: '',
  restaurantName: '',
  reservationBranch: '',
  reservationDate: '',
  reservationTime: '',
  reservationRange: '',
  reservationPeople: '',
  reservationAgree: '',
  reservationDeposit: '20.000',

  name: '',
  email: '',
  address: '',
  phone: '',
  scheduleFrom: '',
  scheduleTo: '',
  deposit: 20000,
  nit: '',
}

export const store = createStore(reducer, initialState)
