export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';
export const FAILURED_MENU = 'FAILURED_MENU';

export const NAME_DISH = 'NAME_DISH';
export const PRICE_DISH = 'PRICE_DISH';
export const DESCRIPTION_DISH = 'DESCRIPTION_DISH';
export const CATEGORY_DISH = 'CATEGORY_DISH';
export const IMAGE_DISH = 'IMAGE_DISH';

export const CANCEL_NAME_DISH = 'CANCEL_NAME_DISH';
export const CANCEL_PRICE_DISH = 'CANCEL_PRICE_DISH';
export const CANCEL_DESCRIPTION_DISH = 'CANCEL_DESCRIPTION_DISH';
export const CANCEL_CATEGORY_DISH = 'CANCEL_CATEGORY_DISH';
export const CANCEL_IMAGE_DISH = 'CANCEL_IMAGE_DISH';

export const DISHES_LIST = 'DISHES_LIST';
export const CREATE_DISH = 'CREATE_DISH';
export const SET_DISH_ID = 'SET_DISH_ID';

export const initialState= {
  dishId: '',
  nameDish: '',
  price: '',
  description: '',
  category: '',
  file: null,
  dishesList: [],
  loading: false,
  message: '',
  errorMessage: '',
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
    case SET_DISH_ID:
      return {
        ...state,
        dishId: action.payload,
      }
    default: 
      return state;
  }
};