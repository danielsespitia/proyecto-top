import './App.css';
import { 
  BrowserRouter as Router,
  Route,
	Switch,
	Link,
} 
from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import FormSignUp from './pages/FormSignUp'
import RestaurantProfile from './pages/RestaurantProfile'

function App () {
  return (
    <Router>
    <Header></Header>
			<ul>
				<h1><Link to="/restaurantprofile">Restaurant Profile</Link></h1>
			</ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={FormSignUp}/>
				<Route exact path='/' component={Home}/>
				<Route
					exact path='/restaurantprofile' 
					component={RestaurantProfile}/>
      </Switch>
    </Router>
  )
}

export default App;

