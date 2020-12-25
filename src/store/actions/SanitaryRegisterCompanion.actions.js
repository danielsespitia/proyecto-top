import axios from 'axios'
import { 
  CREATE_SANITARY_REGISTERC,
  FAILURED_SANITARY_REGISTERC,
  LOADINGC,
  FINISHED_LOADINGC,
  QUESTION1C,
  QUESTION2C,
  QUESTION3C,
  QUESTION4C,
  TEMPERATUREC,
  NAME_COMPANION,
  CANCEL_QUESTION1C,
  CANCEL_QUESTION2C,
  CANCEL_QUESTION3C,
  CANCEL_QUESTION4C,
  CANCEL_TEMPERATUREC,
  CANCEL_NAME_COMPANION,
  MESSAGE_TEMPERATUREC,
} from '../reducers/SanitaryRegisterCompanion.reducer'

export function getQuestionOne( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION1C, payload})
  }
};

export function getQuestionTwo( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION2C, payload})
  }
};

export function getQuestionThree( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION3C, payload})
  }
};

export function getQuestionFour( payload ) {
  return function( dispatch ) {
    dispatch({ type: QUESTION4C, payload})
  }
};

export function getTemperature( payload ) {
  return function( dispatch ) {
    dispatch({ type: TEMPERATUREC, payload})
  }
};

export function getNameCompanion( payload ) {
  return function( dispatch ) {
    dispatch({ type: NAME_COMPANION, payload})
  }
};

export function createSanitaryRegister(data) {
  const { 
    question1SymptomsCovid, 
    question2ContactWithPeople, 
    question3InternationalTravel, 
    question4HealthWorker, 
    temperature, 
    nameCompanion, } = data
  return async function (dispatch) {
    dispatch({ type: LOADINGC })
    dispatch({ 
      type: FAILURED_SANITARY_REGISTERC,
      payload: '',
    })
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/sanitary-register/companions',
        data: {
          question1SymptomsCovid,
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
        type: CREATE_SANITARY_REGISTERC,
        payload: 'Registro sanitario actualizado exitosamente',
      })
    } catch (err) {
      dispatch({
        type: FAILURED_SANITARY_REGISTERC,
        payload: 'Lo sentimos, no pudimos enviar tu información',
      })
    } finally {
      dispatch({ type: FINISHED_LOADINGC })
    }
  }
};

export function cancelSendForm() {
  return function(dispatch) {
    dispatch({ type: CANCEL_QUESTION1C })
    dispatch({ type: CANCEL_QUESTION2C })
    dispatch({ type: CANCEL_QUESTION3C })
    dispatch({ type: CANCEL_QUESTION4C })
    dispatch({ type: CANCEL_TEMPERATUREC })
    dispatch({ type: CANCEL_NAME_COMPANION })
    dispatch({ 
      type: MESSAGE_TEMPERATUREC, 
      payload: 'Por favor diligencia por lo menos tu temperatura actual',
    })
  }
};