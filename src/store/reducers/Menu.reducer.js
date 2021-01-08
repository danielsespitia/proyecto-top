export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';
export const FAILURED_MENU = 'FAILURED_MENU';

export const NAME_DISH = 'NAME_DISH';
export const PRICE_DISH = 'PRICE_DISH';
export const DESCRIPTION_DISH = 'DESCRIPTION_DISH';
export const CATEGORY_DISH = 'CATEGORY_DISH';
export const IMAGE_DISH = 'IMAGE_DISH';

export const DISHES_LIST = 'DISHES_LIST';

export const initialState= {
  nameDish: '',
  price: '',
  description: '',
  category: '',
  image: '',
  dishesList: [],
  loading: false,
  message: '',
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
        message: action.payload,
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
        image: action.payload,
      }
    case DISHES_LIST:
      return {
        ...state,
        dishesList: action.payload,
      }
    default: 
      return state;
  }
};