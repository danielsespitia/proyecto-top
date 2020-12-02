import { createStore } from 'redux'


export const RESTAURANT_TO_RESERVATION = 'RESTAURANT_TO_RESERVATION'

function reducer (state, action ) {
  switch (action.type) {
    case RESTAURANT_TO_RESERVATION:
      return {
        ...state,
        restaurantName: action.payload 
      }
    case 'reservationInit':
      console.log('store:',action.payload)
      return {
        ...state,
        restaurantName: action.payload
      }
    default:
      return state
  }
}


const initialState = {
  restaurantName: 'Restaurant name inicial',
}

export const store = createStore(reducer, initialState)
