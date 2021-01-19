import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reservationReducer } from './reducers/Reservation.reducer'
import { clientReducer } from './reducers/Client.reducer'
import { restaurantReducer } from './reducers/Restaurant.reducer'
import { sanitaryRegisterReducer } from './reducers/SanitaryRegister.reducers'
import { sanitaryRegisterCompanionReducer } from './reducers/SanitaryRegisterCompanion.reducer'
import { menuReducer } from './reducers/Menu.reducer';
import { restaurantReservationReducer } from './reducers/RestaurantReservation.reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ 
  clientReducer,
  restaurantReducer, 
  reservationReducer, 
  sanitaryRegisterReducer,
  sanitaryRegisterCompanionReducer,
  menuReducer,
  restaurantReservationReducer,
})
const middlewares = applyMiddleware(thunk)


export const store = createStore(rootReducer, middlewares)
