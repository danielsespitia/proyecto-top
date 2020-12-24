export const CREATE_SANITARY_REGISTER = 'CREATE_SANITARY_REGISTER';
export const FAILURED_SANITARY_REGISTER = 'FAILURED_SANITARY_REGISTER';
export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const QUESTION1 = 'QUESTION1';
export const QUESTION2 = 'QUESTION2';
export const QUESTION3 = 'QUESTION3';
export const QUESTION4 = 'QUESTION4';
export const TEMPERATURE = 'TEMPERATURE';
export const NAME_COMPANION = 'NAME_COMPANION';

export const CANCEL_QUESTION1 = 'CANCEL_QUESTION1';
export const CANCEL_QUESTION2 = 'CANCEL_QUESTION2';
export const CANCEL_QUESTION3 = 'CANCEL_QUESTION3';
export const CANCEL_QUESTION4 = 'CANCEL_QUESTION4';
export const CANCEL_TEMPERATURE = 'CANCEL_TEMPERATURE';
export const CANCEL_NAME_COMPANION = 'CANCEL_NAME_COMPANION';
export const MESSAGE_TEMPERATURE = 'MESSAGE_TEMPERATURE';

export const initialState = {
  question1SymptomsCovidC: false,
  question2ContactWithPeople: false,
  question3InternationalTravel: false,
  question4HealthWorker: false,
  temperature: '',
  nameCompanion: '',
  message: '',
  errorMessage: '',
  loading: false,
  canExistData: false,
}

export function sanitaryRegisterCompanionReducer( state = initialState, action) {
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
        errorMessage: action.payload,
      }
    case QUESTION1:
      return {
        ...state,
        question1SymptomsCovidC: action.payload,
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
    case NAME_COMPANION: 
      return {
        ...state,
        nameCompanion: action.payload,
      };
    case CANCEL_QUESTION1:
      return {
        ...state,
        question1SymptomsCovidC: false,
      }
    case CANCEL_QUESTION2:
      return {
      ...state,
      question2ContactWithPeople: false,
    }
    case CANCEL_QUESTION3:
      return {
      ...state,
      question3InternationalTravel: false,
    }
    case CANCEL_QUESTION4:
      return {
      ...state,
      question4HealthWorker: false,
    }
    case CANCEL_TEMPERATURE:
      return {
      ...state,
      temperature: '',
    }
    case CANCEL_NAME_COMPANION:
      return {
        ...state,
        nameCompanion: '',
      }
    case MESSAGE_TEMPERATURE:
      return {
      ...state,
      message: action.payload,
    }
    default:
      return state;
  }
};