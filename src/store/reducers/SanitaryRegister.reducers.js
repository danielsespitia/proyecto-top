export const CREATE_SANITARY_REGISTER = 'CREATE_SANITARY_REGISTER';
export const FAILURED_SANITARY_REGISTER = 'FAILURED_SANITARY_REGISTER';
export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';
export const GET_DATA_FORM = 'GET_DATA_FORM';

export const QUESTION1 = 'QUESTION1';
export const QUESTION2 = 'QUESTION2';
export const QUESTION3 = 'QUESTION3';
export const QUESTION4 = 'QUESTION4';
export const TEMPERATURE = 'TEMPERATURE';

export const CANCEL_QUESTION1 = 'CANCEL_QUESTION1';

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
