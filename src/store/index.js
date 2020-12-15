import { createStore, combineReducers, applyMiddleware } from 'redux'
import restaurantReducer from './restaurantReducer'
import reservationReducer from './reservationReducer'
import { sanitaryRegisterReducer } from './reducers/SanitaryRegister.reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ restaurantReducer, reservationReducer, sanitaryRegisterReducer})
const middlewares = applyMiddleware(thunk)


export const store = createStore(rootReducer, middlewares)
