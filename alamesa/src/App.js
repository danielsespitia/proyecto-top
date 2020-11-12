import './App.css';
import { 
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
} 
from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'

function App () {
		return (
			<>
				<Layout />
				<Router>
					<ul>
						<h1><Link to="/restaurantprofile">Restaurant Profile</Link></h1>
					</ul>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route
						exact path='/restaurantprofile' 
						component={RestaurantProfile}/>
					</Switch>
				</Router>
			</>
		)
}

export default App;

