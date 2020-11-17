import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} 
from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import FormSignUp from './pages/FormSignUp'
import FormSignIn from './pages/FormSignIn'
import RestaurantForm from './pages/RestaurantForm'
import RestaurantProfile from './pages/RestaurantProfile'
import Restaurants from './pages/Restaurants'
import ShoppingCart from './pages/ShoppingCart'

function App () {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={FormSignUp}/>
        <Route exact path="/sign-in" component={FormSignIn}/>
        <Route exact path='/restaurant-profile' component={RestaurantForm}/>
        <Route path="/your-profile" component={RestaurantProfile}/>
        <Route exact path="/restaurants" component={Restaurants}/>
        <Route exact path="/restaurants/reservation/shopping-cart" component={ShoppingCart}/>
      </Switch>
    </Router>
  )
}

export default App;

