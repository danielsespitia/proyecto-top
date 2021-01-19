import axios from 'axios';
import {
  LOADING,
  FINISHED_LOADING,
  MINI_LOADING,
  FINISHED_MINI_LOADING,
  FAILURED_MENU,
  DISHES_LIST,
  NAME_DISH,
  DESCRIPTION_DISH,
  PRICE_DISH,
  CATEGORY_DISH,
  IMAGE_DISH,
  CREATE_DISH,
  DELETE_DISH,
  UPDATE_DISH,
  MESSAGE_DELETE_DISH,
  PUSH_DATA_DISH,
  CANCEL_DESCRIPTION_DISH,
  CANCEL_PRICE_DISH,
  CANCEL_CATEGORY_DISH,
  CANCEL_IMAGE_DISH,
  CANCEL_NAME_DISH,
  CANCEL_MESSAGE,
  CLEAN_DISH_LIST,
  SET_DISH_ID,
  DATA_DISH_EXIST,
} from '../reducers/Menu.reducer';

export function getData() {
  return function(dispatch) {
    dispatch({ type: LOADING })
    const menuId = localStorage.getItem('menu')
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

export function setNameDish( payload ) {
  return function ( dispatch ) {
    dispatch({ type: NAME_DISH, payload })
  }
};

export function setDescription( payload ) {
  return function ( dispatch ) {
    dispatch({ type: DESCRIPTION_DISH, payload })
  }
};

export function setPrice( payload ) {
  return function ( dispatch ) {
    dispatch({ type: PRICE_DISH, payload })
  }
};

export function setCategory( payload ) {
  return function ( dispatch ) {
    dispatch({ type: CATEGORY_DISH, payload })
  }
};

export function setImage( payload ) {
  return function ( dispatch ) {
    dispatch({ type: IMAGE_DISH, payload })
  }
};

export function setDishId( payload ) {
  return function ( dispatch ) {
    dispatch({ type: SET_DISH_ID, payload })
    dispatch({ type: DATA_DISH_EXIST, payload: true })
  }
};

export function resetDataExist() {
  return function ( dispatch ) {
    dispatch({ type: DATA_DISH_EXIST, payload: false})
  }
};

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
      dispatch({ type: PUSH_DATA_DISH, payload: data})
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
  return async function (dispatch) {
    const token = localStorage.getItem('token')
    dispatch({ type: MINI_LOADING})
    try {
      const { data : { data } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/dishes/${dishId}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: NAME_DISH, payload: data.nameDish })
      dispatch({ type: DESCRIPTION_DISH, payload: data.description })
      dispatch({ type: CATEGORY_DISH, payload: data.category })
      dispatch({ type: PRICE_DISH, payload: data.price })
      dispatch({ type: IMAGE_DISH, payload: data.file })
    } catch(error) {
      dispatch({ 
        type: FAILURED_MENU, 
        payload: error})
    } finally {
      dispatch({ type: FINISHED_MINI_LOADING})
    }
  }
};

export function updateData(data, dishId, index) {
  return async function(dispatch) {
    dispatch({ type: MINI_LOADING})
    try {
      const token = localStorage.getItem('token')
      const response = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url:`/dishes/${dishId}`,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data; boundary=something'
        },
      });
      console.log('here dispatch in http', response.data.data)
      dispatch({
        type: UPDATE_DISH,
        index: index,
        payload: response.data.data
      })
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
      dispatch({ type: FINISHED_MINI_LOADING })
    }
  }
};

export function deleteData(dishId, index) {
  return async function(dispatch) {
    dispatch({ type: MINI_LOADING })
    try {
      const token = localStorage.getItem('token')
      await axios({
        method: 'DELETE',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/dishes/${dishId}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      dispatch({ type: DELETE_DISH, payload: index})
      dispatch({ type: MESSAGE_DELETE_DISH })
    }
    catch(err) {
      dispatch({
        type: FAILURED_MENU,
        payload: 'Lo sentimos, no pudimos realizar está operación'
      })
    } finally {
      dispatch({ type: FINISHED_MINI_LOADING })
    }
  }
};

export function cleanForm() {
  return function(dispatch) {
    dispatch({ type: CANCEL_NAME_DISH })
    dispatch({ type: CANCEL_DESCRIPTION_DISH })
    dispatch({ type: CANCEL_CATEGORY_DISH })
    dispatch({ type: CANCEL_PRICE_DISH })
    dispatch({ type: CANCEL_IMAGE_DISH })
    dispatch({ type: CANCEL_MESSAGE })
  }
};

export function cleanDish() {
  return function(dispatch) {
    dispatch({ type: CLEAN_DISH_LIST })
  }
}