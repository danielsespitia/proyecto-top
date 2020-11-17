import './App.css';
import './components/fontAwesomeicons'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} 
from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import FormSignUp from './pages/FormSignUp'
import RestaurantForm from './pages/RestaurantForm'
import RestaurantProfile from './pages/RestaurantProfile'
import Restaurants from './pages/Restaurants'
import Reservation from './pages/ReservationForm'

function App () {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={FormSignUp}/>
        <Route exact path='/restaurant-profile' component={RestaurantForm}/>
        <Route path="/your-profile" component={RestaurantProfile}/>
        <Route exact path="/restaurants" component={Restaurants}/>
        <Route exact path="/reservation" component={Reservation}/>
      </Switch>
    </Router>
  )
}

export default App;

