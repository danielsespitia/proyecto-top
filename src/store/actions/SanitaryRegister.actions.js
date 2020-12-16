import axios from 'axios'
import { 
  CREATE_SANITARY_REGISTER,
  FAILURED_SANITARY_REGISTER,
  LOADING,
  FINISHED_LOADING,
  QUESTION1,
  QUESTION2,
  QUESTION3,
  QUESTION4,
  TEMPERATURE,
  CANCEL_QUESTION1,
  CANCEL_QUESTION2,
  CANCEL_QUESTION3,
  CANCEL_QUESTION4,
  CANCEL_TEMPERATURE,
  MESSAGE_TEMPERATURE,
  CAN_EXIST_DATA,
} from '../reducers/SanitaryRegister.reducers'

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
      dispatch({ type: MESSAGE_TEMPERATURE, 
        payload: '' })
      dispatch({
        type: CREATE_SANITARY_REGISTER,
        payload: 'Registro sanitario actualizado exitosamente',
      })
      dispatch({
        type: CAN_EXIST_DATA,
        payload: true,
      })
    } catch (err) {
      dispatch({
        type: FAILURED_SANITARY_REGISTER,
        payload: 'Lo sentimos, no pudimos enviar tu información',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
      dispatch({
        type: CREATE_SANITARY_REGISTER,
        payload: '',
      })
    }
  }
};

export function cancelSendForm() {
  return function(dispatch) {
    dispatch({ type: CANCEL_QUESTION1 })
    dispatch({ type: CANCEL_QUESTION2 })
    dispatch({ type: CANCEL_QUESTION3 })
    dispatch({ type: CANCEL_QUESTION4 })
    dispatch({ type: CANCEL_TEMPERATURE })
    dispatch({ 
      type: MESSAGE_TEMPERATURE, 
      payload: 'Por favor diligencia por lo menos tu temperatura actual',
    })
    dispatch({ 
      type: CAN_EXIST_DATA,
      payload: false,
    })
  }
};

export function getData() {
  return function(dispatch) {
    const token = localStorage.getItem('token')
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/sanitary-register/',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then(( { data } ) => {
      dispatch({ type: CREATE_SANITARY_REGISTER, payload: '', })
      dispatch({ type: QUESTION1, payload: data.question1SymptomsCovid })
      dispatch({ type: QUESTION2, payload: data.question2ContactWithPeople, })
      dispatch({ type: QUESTION3, payload: data.question3InternationalTravel, })
      dispatch({ type: QUESTION4, payload: data.question4HealthWorker, })
      dispatch({ type: TEMPERATURE, payload: data.temperature, })
      dispatch({ type: CAN_EXIST_DATA, payload: true,})
    })
    .catch(err => {
      dispatch({ 
        type: FAILURED_SANITARY_REGISTER,
        payload: 'Lo sentimos, vuelve a recargar la página para cargar la información'
      })
    })
  }
};

export function updateData(data) {
  const { question1SymptomsCovid, question2ContactWithPeople, question3InternationalTravel, question4HealthWorker, temperature } = data
  return async function(dispatch) {
    dispatch({ type: LOADING })
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'PUT',
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
    } catch (err) {
      dispatch({
        type: FAILURED_SANITARY_REGISTER,
        payload: 'Lo sentimos, no pudimos actualizar tu información',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};