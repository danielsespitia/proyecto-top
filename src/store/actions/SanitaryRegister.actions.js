import axios from 'axios'
import { 
  CREATE_SANITARY_REGISTER,
  FAILURED_SANITARY_REGISTER,
  LOADING,
  FINISHED_LOADING,
  GET_DATA_FORM,
  QUESTION1,
  QUESTION2,
  QUESTION3,
  QUESTION4,
  TEMPERATURE,
  CANCEL_QUESTION1,
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
    // dispatch({ type: LOADING })
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

export function getData() {
  return function(dispatch) {
    // dispatch({ type: LOADING})
    const token = localStorage.getItem('token')
    // if(!id){ console.log('no existe') }
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/sanitary-register/`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then(( { data } ) => {
      dispatch({ type: CREATE_SANITARY_REGISTER, payload: ''})
      dispatch({ type: QUESTION1, payload: data.question1SymptomsCovid })
      dispatch({ type: QUESTION2, payload: data.question2ContactWithPeople })
      dispatch({ type: QUESTION3, payload: data.question3InternationalTravel })
      dispatch({ type: QUESTION4, payload: data.question4HealthWorker })
      dispatch({ type: TEMPERATURE, payload: data.temperature })
    })
    .catch(err => {
      dispatch({ 
        type: FAILURED_SANITARY_REGISTER,
        payload: 'Lo sentimos, vuelve a recargar la página para cargar la información'
      })
    })
  }
};