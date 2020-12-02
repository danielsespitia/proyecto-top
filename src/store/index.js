import { createStore } from "redux";

const initialState = {
  deposito: 2,
  niti: '10',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'cambio':
      return { 
        ...state,
        deposito: action.payload,
        niti: action.payload,
      }
      default: return state
  }
};

export const store = createStore(reducer);