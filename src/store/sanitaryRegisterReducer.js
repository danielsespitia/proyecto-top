import axios from 'axios'

const CREATE_SANITARY_REGISTER = 'CREATE_SANITARY_REGISTER';
const FAILURED_SANITARY_REGISTER = 'FAILURED_SANITARY_REGISTER';
const LOADING = 'LOADING';
const FINISHED_LOADING = 'FINISHED_LOADING';
const GET_DATA_FORM = 'GET_DATA_FORM';

const QUESTION1 = 'QUESTION1';
const QUESTION2 = 'QUESTION2';
const QUESTION3 = 'QUESTION3';
const QUESTION4 = 'QUESTION4';
const TEMPERATURE = 'TEMPERATURE';

const CANCEL_QUESTION1 = 'CANCEL_QUESTION1';

export function getQuestionOne( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION1, payload})
  }
};

export function getQuestionTwo( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION2, payload})
  }
};

export function getQuestionThree( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION3, payload})
  }
};

export function getQuestionFour( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION4, payload})
  }
};

export function getTemperature( payload ) {
  return function( dispatch ) {
    dispatch({ type: TEMPERATURE, payload})
  }
};

export function createSanitaryRegister(data) {
  const { question1SymptomsCovid, question2ContactWithPeople, question3InternationalTravel, question4HealthWorker, temperature } = data
  return async function (dispatch) {
    dispatch({ type: LOADING })
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios({
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
        payload: 'Registro sanitario actualizado exitosamente'
      })
      dispatch({
        type: GET_DATA_FORM, 
        payload: data._id
      })
    } catch (err) {
      dispatch({
        type: FAILURED_SANITARY_REGISTER,
        payload: 'Lo sentimos, no pudimos enviar tu información',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};

export function cancelSendForm(onClick) {
  return function(dispatch) {
    dispatch({ 
      type: CANCEL_QUESTION1, 
      payload: false
    })
  }
};

export function getData(id) {
  return async function(dispatch) {
    // dispatch({ type: LOADING})
    const token = localStorage.getItem('token')
    if(!id){ console.log('no existe') }
    try {
      const response = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/sanitary-register/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: CREATE_SANITARY_REGISTER, payload: ''})
      dispatch({ type: QUESTION1, payload: response.question1SymptomsCovid })
      dispatch({ type: QUESTION2, payload: response.question2ContactWithPeople })
      dispatch({ type: QUESTION3, payload: response.question3InternationalTravel })
      dispatch({ type: QUESTION4, payload: response.question4HealthWorker })
      dispatch({ type: TEMPERATURE, payload: response.temperature })
    } catch(err) {
      dispatch({ 
        type: FAILURED_SANITARY_REGISTER,
        payload: 'Lo sentimos, vuelve a recargar la página para cargar la información'
      })
    } finally {
      dispatch({ type: FINISHED_LOADING})
    }
  }
};

export const initialState = {
  question1SymptomsCovid: false,
  question2ContactWithPeople: false,
  question3InternationalTravel: false,
  question4HealthWorker: false,
  temperature: '',
  errorSubmittion: '',
  message: '',
  messageTemperature: '',
  loading: false,
  id: '',
};

export function sanitaryRegisterReducer( state = initialState, action) {
  switch (action.type) {
    case LOADING: 
      return {
        ...state,
        loading: true,
      }
    case FINISHED_LOADING:
      return {
        ...state,
        loading: false,
      }
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
    case QUESTION1:
      return {
        ...state,
        question1SymptomsCovid: action.payload,
      };
    case QUESTION2:
      return {
        ...state,
        question2ContactWithPeople: action.payload,
      };
    case QUESTION3:
      return {
        ...state,
        question3InternationalTravel: action.payload,
      };
    case QUESTION4:
      return {
        ...state,
        question4HealthWorker: action.payload,
      };
    case TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };
    case CANCEL_QUESTION1:
      return {
        ...state,
        question1SymptomsCovid: action.payload,
      }
    case GET_DATA_FORM:
      return {
        ...state,
        id: action.payload
      }
    default:
      return state;
  }
};
