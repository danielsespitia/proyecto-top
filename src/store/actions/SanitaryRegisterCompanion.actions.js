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
  NAME_COMPANION,
  CANCEL_QUESTION1,
  CANCEL_QUESTION2,
  CANCEL_QUESTION3,
  CANCEL_QUESTION4,
  CANCEL_TEMPERATURE,
  CANCEL_NAME_COMPANION,
  MESSAGE_TEMPERATURE,
} from '../reducers/SanitaryRegisterCompanion.reducer'

export function getQuestionOneC( payload ) {
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

export function getNameCompanion( payload ) {
  return function( dispatch ) {
    dispatch({ type: NAME_COMPANION, payload})
  }
};

export function createSanitaryRegister(data) {
  const { 
    question1SymptomsCovidC, 
    question2ContactWithPeople, 
    question3InternationalTravel, 
    question4HealthWorker, 
    temperature, 
    nameCompanion, } = data
  return async function (dispatch) {
    dispatch({ type: LOADING })
    dispatch({ 
      type: FAILURED_SANITARY_REGISTER,
      payload: '',
    })
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/sanitary-register/companions',
        data: {
          question1SymptomsCovidC,
          question2ContactWithPeople,
          question3InternationalTravel,
          question4HealthWorker,
          temperature,
          nameCompanion,
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      dispatch({
        type: CREATE_SANITARY_REGISTER,
        payload: 'Registro sanitario actualizado exitosamente',
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

export function cancelSendForm() {
  return function(dispatch) {
    dispatch({ type: CANCEL_QUESTION1 })
    dispatch({ type: CANCEL_QUESTION2 })
    dispatch({ type: CANCEL_QUESTION3 })
    dispatch({ type: CANCEL_QUESTION4 })
    dispatch({ type: CANCEL_TEMPERATURE })
    dispatch({ type: CANCEL_NAME_COMPANION })
    dispatch({ 
      type: MESSAGE_TEMPERATURE, 
      payload: 'Por favor diligencia por lo menos tu temperatura actual',
    })
  }
};