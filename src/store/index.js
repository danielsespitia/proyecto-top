import { createStore, combineReducers, applyMiddleware } from 'redux'
import restaurantReducer from './restaurantReducer'
import reservationReducer from './reservationReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ restaurantReducer, reservationReducer})
const middlewares = applyMiddleware(thunk)


export const store = createStore(rootReducer, middlewares)
