import './App.css';
import './components/fontAwesomeicons'
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} 
from 'react-router-dom'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ClientProfile from './pages/ClientProfile'
import RestaurantProfile from './pages/RestaurantProfile/RestaurantProfile'
import RestaurantProfileView from './pages/RestaurantProfileView'
import Restaurants from './pages/Restaurants'
import Reservation from './pages/ReservationForm'
import ReservationConfirm from './pages/ReservationConfirm'
import ShoppingCart from './pages/ShoppingCart'
import RestaurantReservations from './pages/RestaurantReservations'
import { Response } from './pages/ResponseEpayco'
import MenuRestaurant from './pages/MenuRestaurant'
import ClientReservation from './pages/ClientReservation'
import PageNotFound from './components/PageNotFound/NotFound'

function PrivateRoute(props) {
  
  const token = localStorage.getItem('token')

  if(!token) return <Redirect to="/sign-in" />
  
  return <Route {...props} />
}

function App () {
  return (
    <div className='App'>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path="/sign-in" component={SignIn}/>
            <PrivateRoute exact path="/client-profile" component={ClientProfile}/>
            <PrivateRoute exact path="/restaurant-profile/view" component={RestaurantProfileView}/>
            <PrivateRoute exact path="/restaurant-profile/edit" component={RestaurantProfile}/>
            <PrivateRoute exact path="/restaurant-profile/my-menu" component={MenuRestaurant}/>
            <Route exact path="/restaurants" component={Restaurants}/>
            <Route exact path="/restaurant-profile/reservations" component={RestaurantReservations}/>
            <PrivateRoute exact path="/restaurants/:restaurantId/reservation" component={Reservation}/>
            <PrivateRoute exact path="/restaurants/:restaurantId/reservation/shopping-cart" component={ShoppingCart}/>
            <PrivateRoute exact path="/restaurants/:restaurantId/reservation/confirm" component={ReservationConfirm}/>
            <Route exact path="/client-reservation" component={ClientReservation}/>
            <Route exact path="/response" component={Response}/>
            <Route component={PageNotFound}/>
          </Switch>
        <Footer></Footer>
        </Router>
    </div>
  )
}

export default App;

