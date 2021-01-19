export const RESERVATION_LOADING = 'RESERVATION_LOADING';
export const RESERVATION_FAILURE = 'RESERVATION_FAILURE';
export const RESERVATION_DATA = 'RESTAURANT_DATA';

export const initialState = {
  reservationData: [],
  loading: false,
  error: '',
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
    default:
      return state
  }
}
