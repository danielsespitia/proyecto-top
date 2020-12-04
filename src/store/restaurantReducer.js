import  axios from 'axios'
const RESTAURANT_LOADING = 'RESTAURANT_LOADING' 
const RESTAURANT_SUCCESS = 'RESTAURANT_SUCCESS'
const RESTAURANT_FAILURE = "RESTAURANT_FAILURE"
const RESTAURANT_FINISHED = "RESTAURANT_FINISHED"

const RESTAURANT_ADDRESS = 'RESTAURANT_ADDRESS'
const RESTAURANT_PHONE = 'RESTAURANT_PHONE'
const RESTAURANT_SCHEDULE_FROM = 'RESTAURANT_SCHEDULE_FROM'
const RESTAURANT_SCHEDULE_TO = 'RESTAURANT_SCHEDULE_TO'
const RESTAURANT_NIT = 'RESTAURANT_NIT'
const RESTAURANT_DEPOSIT = 'RESTAURANT_DEPOSIT'

export function getAddress( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_ADDRESS, payload})
  }
}
export function getPhone( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_PHONE, payload})
  }
}
export function getScheduleFrom( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_SCHEDULE_FROM, payload})
  }
}
export function getScheduleTo( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_SCHEDULE_TO, payload})
  }
}
export function getNit( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_NIT, payload})
  }
}
export function getDeposit( payload ) {
  return function ( dispatch ) {
    dispatch({ type: RESTAURANT_DEPOSIT, payload})
  }
}


//const token = localStorage.getItem('token')
//export function getRestaurantProfile() {
  //return async function (dispatch) {
    //dispatch({ type: RESTAURANT_LOADING})
    //try {
      //const { data } = await axios({
        //method: 'GET',
        //baseURL: 'http://localhost:8080',
        //url: '/restaurants/profile',
        //headers: {
          //Authorization: `Bearer ${token}`
        //},
      //})
      //console.log('reducer:',data)
      //dispatch({ type: RESTAURANT_SUCCESS, payload: data.data}) 
    //}catch(error) {
    //dispatch({ type: RESTAURANT_FAILURE, payload: error})
  //}finally {
    //dispatch({ type: RESTAURANT_FINISHED})
  //}
  //}
//}
//export function postRestaurantProfile(data) {
  //return async function(dispatch){
    //dispatch({ type: RESTAURANT_LOADING})
    //try {
      //const res = await axios({
        //method: 'PUT',
        //baseURL: 'http://localhost:8080',
        //url: '/restaurants/profile',
        //data,
      //})
      //console.log(res)
      //dispatch({ type: RESTAURANT_SUCCESS, payload: res})
    //}catch(error){
      //dispatch({ type: RESTAURANT_FAILURE, payload: error})
    //}finally {
      //dispatch({ type: RESTAURANT_FINISHED})
    //}
  //}
//}

const initialState = {
  
  loading: false,
  error: null,
  data: null,
  deposito: 20000

}


function restaurantReducer (state = initialState, action ) {
  switch (action.type) {
    case RESTAURANT_ADDRESS:
      console.log('reducer:',action.payload)
      return {
        ...state, 
        address: action.payload
      }
    case RESTAURANT_PHONE:
      console.log('reducer:',action.payload)
      return {
        ...state, 
        phone: action.payload
      }
    case RESTAURANT_SCHEDULE_FROM:
      console.log('reducer:',action.payload)
      return {
        ...state, 
        scheduleFrom: action.payload
      }
    case RESTAURANT_SCHEDULE_TO:
      console.log('reducer:',action.payload)
      return {
        ...state, 
        scheduleTo: action.payload
      }
    case RESTAURANT_NIT:
      console.log('reducer:',action.payload)
      return {
        ...state, 
        nit: action.payload
      }
    case RESTAURANT_DEPOSIT:
      console.log('reducer:',action.payload)
      return {
        ...state, 
        deposit: action.payload
      }
    case RESTAURANT_LOADING:
      return {
        ...state,
        loading: true
      }
    case RESTAURANT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case RESTAURANT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case RESTAURANT_FINISHED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
export default restaurantReducer
