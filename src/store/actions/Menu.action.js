import axios from 'axios';
import {
  LOADING,
  FINISHED_LOADING,
  FAILURED_MENU,
  DISHES_LIST,
} from '../reducers/Menu.reducer';

export function getData(menuId) {
  return function(dispatch) {
    dispatch({ type: LOADING })
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/menu/${menuId}`,
    })
    .then(( { data: { dishes } } ) => {
      dispatch({ type: DISHES_LIST, payload: dishes })
      console.log('here in the action creator', dishes)
    })
    .catch(err => {
      dispatch({
        type: FAILURED_MENU,
        payload: 'Lo sentimos, vuelve a recargar la página para cargar la información'
      })
    })
    .finally(() => {
      dispatch({ type: FINISHED_LOADING })
    })
  }
};