import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reservationReducer } from './reducers/Reservation.reducer'
import { restaurantReducer } from './reducers/Restaurant.reducer'
import { sanitaryRegisterReducer } from './reducers/SanitaryRegister.reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ restaurantReducer, reservationReducer, sanitaryRegisterReducer})
const middlewares = applyMiddleware(thunk)


export const store = createStore(rootReducer, middlewares)
