import { createStore } from 'redux'

export const RESTAURANT_ID_RESERVATION = 'RESTAURANT_ID_RESERVATION'
export const RESTAURANT_NAME_RESERVATION = 'RESTAURANT_NAME_RESERVATION'
export const RESERVATION_BRANCH = 'RESERVATION_BRANCH' 
export const RESERVATION_DATE = 'RESERVATION_DATE' 
export const RESERVATION_TIME = 'RESERVATION_TIME' 
export const RESERVATION_RANGE = 'RESERVATION_RANGE' 
export const RESERVATION_PEOPLE = 'RESERVATION_PEOPLE' 
export const RESERVATION_AGREE = 'RESERVATION_AGREE' 

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
}

export const store = createStore(reducer, initialState)
