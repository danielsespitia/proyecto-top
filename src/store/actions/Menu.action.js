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
  CANCEL_DESCRIPTION_DISH,
  CANCEL_PRICE_DISH,
  CANCEL_CATEGORY_DISH,
  CANCEL_IMAGE_DISH,
  CANCEL_NAME_DISH,
  SET_DISH_ID,
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

export function setDishId( payload ) {
  return function ( dispatch ) {
    dispatch({ type: SET_DISH_ID, payload })
  }
}

export function createDish(data) {
  return async function (dispatch) {
    dispatch({ type: LOADING })
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/dishes/',
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data; boundary=something'
        },
      });
      dispatch({ 
        type: CREATE_DISH,
        payload: 'Tu plato se ha creado exitosamente'
      })
      dispatch({ type: CANCEL_NAME_DISH })
      dispatch({ type: CANCEL_DESCRIPTION_DISH})
      dispatch({ type: CANCEL_PRICE_DISH })
      dispatch({ type: CANCEL_CATEGORY_DISH })
      dispatch({ type: CANCEL_IMAGE_DISH })
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

export function getDataDish(dishId) {
  return async function(dispatch) {
    dispatch({ type: LOADING })
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/dishes/${dishId}`,
    })
    .then(( { data } ) => {
      dispatch({ type: NAME_DISH, payload: data.nameDish })
      dispatch({ type: PRICE_DISH, payload: data.price })
      dispatch({ type: DESCRIPTION_DISH, payload: data.description })
      dispatch({ type: CATEGORY_DISH, payload: data.category })
      dispatch({ type: IMAGE_DISH, payload: data.file })
      console.log('here en el action', data)
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
}

export function updateData(data, dishId) {
  return async function(dispatch) {
    dispatch({ type: LOADING})
    try {
      const token = localStorage.getItem('token')
      await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url:`/dishes/${dishId}`,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data; boundary=something'
        },
      });
      dispatch({
        type: CREATE_DISH,
        payload: 'Tu plato se ha actualizado exitosamente'
      })
    }
    catch (err) {
      dispatch({
        type: FAILURED_MENU,
        payload: 'Lo sentimos, no pudimos enviar tu información',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};