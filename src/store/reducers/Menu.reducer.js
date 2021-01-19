export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';
export const MINI_LOADING = 'MINI_LOADING';
export const FINISHED_MINI_LOADING = 'FINISHED_MINI_LOADING';
export const FAILURED_MENU = 'FAILURED_MENU';

export const NAME_DISH = 'NAME_DISH';
export const PRICE_DISH = 'PRICE_DISH';
export const DESCRIPTION_DISH = 'DESCRIPTION_DISH';
export const CATEGORY_DISH = 'CATEGORY_DISH';
export const IMAGE_DISH = 'IMAGE_DISH';
export const PUSH_DATA_DISH = 'PUSH_DATA_DISH';

export const CANCEL_NAME_DISH = 'CANCEL_NAME_DISH';
export const CANCEL_PRICE_DISH = 'CANCEL_PRICE_DISH';
export const CANCEL_DESCRIPTION_DISH = 'CANCEL_DESCRIPTION_DISH';
export const CANCEL_CATEGORY_DISH = 'CANCEL_CATEGORY_DISH';
export const CANCEL_IMAGE_DISH = 'CANCEL_IMAGE_DISH';
export const CANCEL_MESSAGE = 'CANCEL_MESSAGE';
export const CLEAN_DISH_LIST = 'CLEAN_DISH_LIST';

export const DISHES_LIST = 'DISHES_LIST';
export const CREATE_DISH = 'CREATE_DISH';
export const SET_DISH_ID = 'SET_DISH_ID';
export const DATA_DISH_EXIST = 'DATA_DISH_EXIST';

export const initialState= {
  dishId: '',
  nameDish: '',
  price: '',
  description: '',
  category: '',
  file: null,
  dishesList: [],
  loading: false,
  miniLoading: false,
  message: '',
  errorMessage: '',
  dataDishExist: false,
};

export function menuReducer ( state = initialState, action ) {
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
    case MINI_LOADING:
      return {
        ...state,
        miniLoading: true,
      }
    case FINISHED_MINI_LOADING: 
      return {
        ...state,
        miniLoading: false,
      }
    case FAILURED_MENU:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case NAME_DISH:
      return {
        ...state,
        nameDish: action.payload,
      }
    case PRICE_DISH:
      return {
        ...state,
        price: action.payload,
      }
    case DESCRIPTION_DISH:
      return {
        ...state,
        description: action.payload,
      }
    case CATEGORY_DISH:
      return {
        ...state,
        category: action.payload,
      }
    case IMAGE_DISH:
      return {
        ...state,
        file: action.payload,
      }
    case DISHES_LIST:
      return {
        ...state,
        dishesList: action.payload,
      }
    case CREATE_DISH:
      return {
        ...state,
        message: action.payload,
      }
    case PUSH_DATA_DISH:
      return {
        ...state,
        dishesList: action.payload,
      }
    case CANCEL_NAME_DISH:
      return {
        ...state,
        nameDish: '',
      }
    case CANCEL_PRICE_DISH:
      return {
        ...state,
        price: '',
      }
    case CANCEL_DESCRIPTION_DISH:
      return {
        ...state,
        description: '',
      }
    case CANCEL_CATEGORY_DISH:
      return {
        ...state,
        category: '',
      }
    case CANCEL_IMAGE_DISH:
      return {
        ...state,
        file: null,
      }
    case CANCEL_MESSAGE:
      return {
        ...state,
        message: '',
        errorMessage: '',
      }
    case CLEAN_DISH_LIST:
      return {
        ...state,
        dishesList: [],
      }
    case SET_DISH_ID:
      return {
        ...state,
        dishId: action.payload,
      }
    case DATA_DISH_EXIST:
      return {
        ...state,
        dataDishExist: action.payload,
      }
    default: 
      return state;
  }
};