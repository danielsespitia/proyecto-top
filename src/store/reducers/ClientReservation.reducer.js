export const RESERVATION_LOADING = 'RESERVATION_LOADING';
export const RESERVATION_FAILURE = 'RESERVATION_FAILURE';
export const RESERVATION_DATA = 'RESTAURANT_DATA';
export const RESERVATION_FINISHED = 'RESERVATION_FINISHED';
export const RESERVATION_DELETE = 'RESERVATION_DELETE';

export const initialState = {
  reservationData: [],
  loading: false,
  error: '',
}

function removeItemToState(reservationData, index) {
  let reservations = reservationData.reservations.filter(( r, i ) => i !== index)
  return { ...reservationData, reservations }
}

export function clientReservationReducer (state = initialState, action){
  switch (action.type) {
    case RESERVATION_DATA:
      return {
        ...state,
        reservationData: action.payload
      }
    case RESERVATION_LOADING:
      return {
        ...state, 
        loading: true
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
    case RESERVATION_DELETE:
      return{
        ...state,
        reservationData: removeItemToState(state.reservationData, action.payload)
      }
    default:
      return state
  }
}



