import { createStore } from "redux";

const initialState = {
  deposit: 0,
};

const reducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(reducer);