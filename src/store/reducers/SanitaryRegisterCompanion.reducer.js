export const CREATE_SANITARY_REGISTERC = 'CREATE_SANITARY_REGISTERC';
export const FAILURED_SANITARY_REGISTERC = 'FAILURED_SANITARY_REGISTERC';
export const LOADINGC = 'LOADINGC';
export const FINISHED_LOADINGC = 'FINISHED_LOADINGC';

export const QUESTION1C = 'QUESTION1C';
export const QUESTION2C = 'QUESTION2C';
export const QUESTION3C = 'QUESTION3C';
export const QUESTION4C = 'QUESTION4C';
export const TEMPERATUREC = 'TEMPERATUREC';
export const NAME_COMPANION = 'NAME_COMPANION';

export const CANCEL_QUESTION1C = 'CANCEL_QUESTION1C';
export const CANCEL_QUESTION2C = 'CANCEL_QUESTION2C';
export const CANCEL_QUESTION3C = 'CANCEL_QUESTION3C';
export const CANCEL_QUESTION4C = 'CANCEL_QUESTION4C';
export const CANCEL_TEMPERATUREC = 'CANCEL_TEMPERATUREC';
export const CANCEL_NAME_COMPANION = 'CANCEL_NAME_COMPANION';
export const MESSAGE_TEMPERATUREC = 'MESSAGE_TEMPERATUREC';

export const initialState = {
  question1SymptomsCovid: false,
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
    case LOADINGC: 
      return {
        ...state,
        loading: true,
      }
    case FINISHED_LOADINGC:
      return {
        ...state,
        loading: false,
      }
    case CREATE_SANITARY_REGISTERC:
      return {
        ...state,
        message: action.payload,
      };
    case FAILURED_SANITARY_REGISTERC:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case QUESTION1C:
      return {
        ...state,
        question1SymptomsCovid: action.payload,
      };
    case QUESTION2C:
      return {
        ...state,
        question2ContactWithPeople: action.payload,
      };
    case QUESTION3C:
      return {
        ...state,
        question3InternationalTravel: action.payload,
      };
    case QUESTION4C:
      return {
        ...state,
        question4HealthWorker: action.payload,
      };
    case TEMPERATUREC:
      return {
        ...state,
        temperature: action.payload,
      };
    case NAME_COMPANION: 
      return {
        ...state,
        nameCompanion: action.payload,
      };
    case CANCEL_QUESTION1C:
      return {
        ...state,
        question1SymptomsCovid: false,
      }
    case CANCEL_QUESTION2C:
      return {
      ...state,
      question2ContactWithPeople: false,
    }
    case CANCEL_QUESTION3C:
      return {
      ...state,
      question3InternationalTravel: false,
    }
    case CANCEL_QUESTION4C:
      return {
      ...state,
      question4HealthWorker: false,
    }
    case CANCEL_TEMPERATUREC:
      return {
      ...state,
      temperature: '',
    }
    case CANCEL_NAME_COMPANION:
      return {
        ...state,
        nameCompanion: '',
      }
    case MESSAGE_TEMPERATUREC:
      return {
      ...state,
      message: action.payload,
    }
    default:
      return state;
  }
};