export const RESTAURANT_LOADING = 'RESTAURANT_LOADING' 
export const RESTAURANT_SUCCESS = 'RESTAURANT_SUCCESS'
export const RESTAURANT_FAILURE = "RESTAURANT_FAILURE"
export const RESTAURANT_FINISHED = "RESTAURANT_FINISHED"
export const RESTAURANT_NAME = 'RESTAURANT_NAME'
export const RESTAURANT_EMAIL = 'RESTAURANT_EMAIL'
export const RESTAURANT_LOGO = 'RESTAURANT_LOGO'
export const RESTAURANT_ADDRESS = 'RESTAURANT_ADDRESS'
export const RESTAURANT_PHONE = 'RESTAURANT_PHONE'
export const RESTAURANT_SCHEDULE_FROM = 'RESTAURANT_SCHEDULE_FROM'
export const RESTAURANT_SCHEDULE_TO = 'RESTAURANT_SCHEDULE_TO'
export const RESTAURANT_NIT = 'RESTAURANT_NIT'
export const RESTAURANT_DEPOSIT = 'RESTAURANT_DEPOSIT'
export const MENU_ID = 'MENU_ID'

export const initialState = {
  name: '',
  email: '',
  logo: '',
  address: '',
  phone: '',
  scheduleFrom: '',
  scheduleTo:'',
  nit: '',
  deposit: '',
  menuId: '',
  loading: false,
  error: '',
}


export function restaurantReducer (state = initialState, action ) {
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
    case RESTAURANT_LOGO:
      return {
        ...state,
        logo: action.payload
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
    case MENU_ID:
      return {
        ...state,
        menuId: action.payload
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
