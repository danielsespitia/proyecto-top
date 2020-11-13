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
import RestaurantForm from './pages/RestaurantForm'
import YourRprofile from './pages/YourRprofile'

function App () {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={FormSignUp}/>
        <Route exact path='/' component={Home}/>
        <Route
          exact path='/restaurant-profile' 
          component={RestaurantForm}/>
        <Route path="/your-profile" component={YourRprofile}/>
      </Switch>
    </Router>
  )
}

export default App;

