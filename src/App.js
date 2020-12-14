import './App.css';
import './components/fontAwesomeicons'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} 
from 'react-router-dom'
import Header from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ClientProfile from './pages/ClientProfile'
import RestaurantProfile from './pages/RestaurantProfile'
import MyRestaurant from './pages/MyRestaurant'
import Restaurants from './pages/Restaurants'
import Reservation from './pages/ReservationForm'
import ReservationConfirm from './pages/ReservationConfirm'
import ShoppingCart from './pages/ShoppingCart'
import RestaurantReservations from './pages/RestaurantReservations'

function App () {
  return (
    <div className='App'>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path="/sign-in" component={SignIn}/>
            <Route exact path="/client-profile" component={ClientProfile}/>
            <Route exact path="/restaurant-profile" component={MyRestaurant}/>
            <Route exact path="/restaurant-profile/edit" component={RestaurantProfile}/>
            <Route exact path="/restaurant-profile/reservations" component={RestaurantReservations}/>
            <Route exact path="/restaurants" component={Restaurants}/>
            <Route exact path="/restaurants/:restaurantId/reservation" component={Reservation}/>
            <Route exact path="/restaurants/:restaurantId/reservation/shopping-cart" component={ShoppingCart}/>
            <Route exact path="/restaurants/:restaurantId/reservation/confirm" component={ReservationConfirm}/>
          </Switch>
        <Footer></Footer>
        </Router>
    </div>
  )
}

export default App;

