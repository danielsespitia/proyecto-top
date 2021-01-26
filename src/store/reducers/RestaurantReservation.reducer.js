export const RESERVATION_LOADING = 'RESTAURANT_RESERVATION_LOADING';
export const RESERVATION_FAILURE = 'RESTAURANT_RESERVATION_FAILURE';
export const RESERVATION_DATA = 'CLIENT_DATA';
export const RESERVATION_FINISHED = 'RESTAURANT_RESERVATION_FINISHED';
export const RESERVATION_DELETE = 'RESTAURANT_RESERVATION_DELETE';

export const initialState = {
    reservationData: [],
    loading: false,
    error: null,
}

function removeItemReservation(reservationData, index) {
    let reservations = reservationData.reservations.filter((r, i) => i !== index)
    return { ...reservationData, reservations }
}

export function restaurantReservationReducer (state = initialState, action) {
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
            return {
                ...state,
                loading: false
            }
        case RESERVATION_DELETE:
            return {
                ...state,
                reservationData: removeItemReservation(state.reservationData, action.payload)
            }
        default:
            return state
    }
}