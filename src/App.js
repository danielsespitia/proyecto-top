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
import SanitaryRegister from './pages/SanitaryRegister'
import ClientProfile from './pages/ClientProfile'
import RestaurantForm from './pages/RestaurantForm'
import RestaurantProfile from './pages/RestaurantProfile'
import Restaurants from './pages/Restaurants'
import Reservation from './pages/ReservationForm'
import ShoppingCart from './pages/ShoppingCart'

function App () {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/sign-in" component={SignIn}/>
        <Route exact path="/sanitary-register" component={SanitaryRegister}/>
        <Route exact path="/client-profile" component={ClientProfile}/>
        <Route exact path='/restaurant-profile' component={RestaurantForm}/>
        <Route exact path="/your-profile" component={RestaurantProfile}/>
        <Route exact path="/restaurants" component={Restaurants}/>
        <Route exact path="/restaurants/:restaurantId/reservation" component={Reservation}/>
        <Route exact path="/restaurants/:restaurantId/reservation/shopping-cart" component={ShoppingCart}/>
      </Switch>
    <Footer></Footer>
    </Router>
  )
}

export default App;

