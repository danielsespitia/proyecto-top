import axios from 'axios'

const CREATE_SANITARY_REGISTER = 'CREATE_SANITARY_REGISTER'
const CHANGE_QUESTION1 = 'CHANGE_QUESTION1'
const CHANGE_QUESTION2 = 'CHANGE_QUESTION2'
const CHANGE_QUESTION3 = 'CHANGE_QUESTION3'
const CHANGE_QUESTION4 = 'CHANGE_QUESTION4'
const CHANGE_TEMPERATURE = 'CHANGE_TEMPERATURE'

export function handleChange({ target: { value, checked }}) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_QUESTION1,
      payload: checked,
    })
    dispatch({
      type: CHANGE_QUESTION2,
      payload: checked,
    })
    dispatch({
      type: CHANGE_QUESTION3,
      payload: checked,
    })
    dispatch({
      type: CHANGE_QUESTION4,
      payload: checked,
    })
    dispatch({
      type: CHANGE_TEMPERATURE,
      payload: value,
    })
  }
}

export function createSanitaryRegister(data) {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/sanitary-register',
      data,
    });
    dispatch({
      message: 'Registro sanitario actualizado exitosamente'
    })
  }
}

export const initialState = {
  question1SymptomsCovid: false,
  question2ContactWithPeople: false,
  question3InternationalTravel: false,
  question4HealthWorker: false,
  temperature: '',
  errorSubmittion: '',
  message: {},
  loading: false,
}

export function sanitaryRegisterReducer( state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_SANITARY_REGISTER:
      return {
        ...state,
        message: payload,
        errorSubmittion: payload,
      };
    case CHANGE_QUESTION1:
      return {
        ...state,
        question2ContactWithPeople: payload,
      };
    case CHANGE_QUESTION2:
      return {
        ...state,
        question2ContactWithPeople: payload,
      };
    case CHANGE_QUESTION3:
      return {
        ...state,
        question3InternationalTravel: payload,
      };
    case CHANGE_QUESTION4:
      return {
        ...state,
        question4HealthWorker: payload,
      };
    case CHANGE_TEMPERATURE:
      return {
        ...state,
        temperature: payload,
      };
    default:
      return state;
  }
}
