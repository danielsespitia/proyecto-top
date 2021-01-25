export const CLIENT_LOADING = 'CLIENT_LOADING'
export const CLIENT_SUCCESS = 'CLIENT_SUCCESS'
export const CLIENT_FAILURE = 'CLIENT_FAILURE'
export const CLIENT_FINISHED = 'CLIENT_FINISHED'

export const CLIENT_ID = 'CLIENT_ID'
export const CLIENT_NAME = 'CLIENT_NAME'
export const CLIENT_LASTNAME = 'CLIENT_LASTNAME'
export const CLIENT_EMAIL = 'CLIENT_EMAIL'
export const CLIENT_IMAGE = 'CLIENT_IMAGE'
export const CLIENT_ADDRESS = 'CLIENT_ADDRESS'
export const CLIENT_PHONE = 'CLIENT_PHONE'
export const CLIENT_IDENTIFICATION = 'CLIENT_IDENTIFICATION'
export const CLIENT_BIRTHDAY = 'CLIENT_BIRTHDAY'
export const CLIENT_ID_TYPE = 'CLIENT_ID_TYPE'

export const initialState = {
  id: '',
  name: '',
  lastName: '',
  email: '',
  image: '',
  address: '',
  phone: '',
  identification: '',
  birthday: '',
  idType: '',
  loading: 'false',
  error: 'null',
}

export function clientReducer ( state = initialState, action ) {
  switch (action.type) {
    case CLIENT_ID:
      return {
        ...state,
        id: action.payload
      }
    case CLIENT_NAME: return {
        ...state,
        name: action.payload
      }
    case CLIENT_LASTNAME:
      return {
        ...state,
        lastName: action.payload
      }
    case CLIENT_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case CLIENT_IMAGE:
      return {
        ...state,
        image: action.payload
      }
    case CLIENT_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    case CLIENT_PHONE:
      return {
        ...state,
        phone: action.payload
      }
    case CLIENT_IDENTIFICATION:
      return {
        ...state,
        identification: action.payload
      }
    case CLIENT_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload
      }
    case CLIENT_ID_TYPE:
      return {
        ...state,
        idType: action.payload
      }
    case CLIENT_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLIENT_SUCCESS:
      return {
        ...state,
        loading: action.payload
      }
    case CLIENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case CLIENT_FINISHED:
      return{
        ...state,
        loading: false
      }
    default:
      return state
  }
}
