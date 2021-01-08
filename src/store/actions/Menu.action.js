import axios from 'axios';
import {
  LOADING,
  FINISHED_LOADING,
  FAILURED_MENU,
  DISHES_LIST,
  NAME_DISH,
  DESCRIPTION_DISH,
  PRICE_DISH,
  CATEGORY_DISH,
  IMAGE_DISH,
  CREATE_DISH,
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

export function getNameDish( payload ) {
  return function ( dispatch ) {
    dispatch({ type: NAME_DISH, payload })
  }
};

export function getDescription( payload ) {
  return function ( dispatch ) {
    dispatch({ type: DESCRIPTION_DISH, payload })
  }
};

export function getPrice( payload ) {
  return function ( dispatch ) {
    dispatch({ type: PRICE_DISH, payload })
  }
};

export function getCategory( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CATEGORY_DISH, payload })
  }
};

export function getImage( payload ) {
  return function ( dispatch ) {
    dispatch({ type: IMAGE_DISH, payload })
  }
};

export function createDish(data) {
  const { nameDish, description, category, price, image } = data
  return async function (dispatch) {
    dispatch({ type: LOADING })
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/dishes/',
        data: {
          nameDish,
          description,
          category, 
          price,
          image,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      dispatch({ 
        type: CREATE_DISH,
        payload: 'Tu plato se ha creado exitosamente'
      })
    } catch (err) {
      dispatch({
        type: FAILURED_MENU,
        payload: 'Lo sentimos, no pudimos enviar tu información',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};