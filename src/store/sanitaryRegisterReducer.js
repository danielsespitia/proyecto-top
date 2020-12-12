import axios from 'axios'

const CREATE_SANITARY_REGISTER = 'CREATE_SANITARY_REGISTER'
const FAILURED_SANITARY_REGISTER = 'FAILURED_SANITARY_REGISTER'


const CHANGE_QUESTION1 = 'CHANGE_QUESTION1'
const CHANGE_QUESTION2 = 'CHANGE_QUESTION2'
const CHANGE_QUESTION3 = 'CHANGE_QUESTION3'
const CHANGE_QUESTION4 = 'CHANGE_QUESTION4'
const CHANGE_TEMPERATURE = 'CHANGE_TEMPERATURE'

export function getQuestionOne( payload ) {
  return function( dispatch ) {
    dispatch({ type: CHANGE_QUESTION1, payload})
  }
}

export function getQuestionTwo( payload ) {
  return function( dispatch ) {
    dispatch({ type: CHANGE_QUESTION2, payload})
  }
}

export function getQuestionThree( payload ) {
  return function( dispatch ) {
    dispatch({ type: CHANGE_QUESTION3, payload})
  }
}

export function getQuestionFour( payload ) {
  return function( dispatch ) {
    dispatch({ type: CHANGE_QUESTION4, payload})
  }
}

export function getTemperature( payload ) {
  return function( dispatch ) {
    dispatch({ type: CHANGE_TEMPERATURE, payload})
  }
}

export function createSanitaryRegister(data) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/sanitary-register',
        data: {
          question1SymptomsCovid,
          question2ContactWithPeople,
          question3InternationalTravel,
          question4HealthWorker,
          temperature,
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      dispatch({
        type: CREATE_SANITARY_REGISTER,
        message: {successfully: 'Registro sanitario actualizado exitosamente'}
      })
    } catch (err) {
      dispatch({
        type: FAILURED_SANITARY_REGISTER,
        errorSubmittion: 'No pudimos envíar tu formulario'
      })
    }
  }
}

// export function cancelSendForm()

export const initialState = {
  question1SymptomsCovid: false,
  question2ContactWithPeople: false,
  question3InternationalTravel: false,
  question4HealthWorker: false,
  temperature: '',
  errorSubmittion: '',
  message: {},
}

export function sanitaryRegisterReducer( state = initialState, action) {
  switch (action.type) {
    case CREATE_SANITARY_REGISTER:
      return {
        ...state,
        message: action.payload,
      };
    case FAILURED_SANITARY_REGISTER:
      return {
        ...state,
        errorSubmittion: action.payload,
      }
    case CHANGE_QUESTION1:
      return {
        ...state,
        question2ContactWithPeople: action.payload,
      };
    case CHANGE_QUESTION2:
      return {
        ...state,
        question2ContactWithPeople: action.payload,
      };
    case CHANGE_QUESTION3:
      return {
        ...state,
        question3InternationalTravel: action.payload,
      };
    case CHANGE_QUESTION4:
      return {
        ...state,
        question4HealthWorker: action.payload,
      };
    case CHANGE_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };
    default:
      return state;
  }
}
