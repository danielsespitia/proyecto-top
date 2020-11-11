import { 
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
} 
from 'react-router-dom'
import './App.css';
//pages
import Home from './pages/Home'
import Restaurants from './components/Restaurants'
//componenets
import Header from './components/Header'

function App () {
		return (
			<Router>
				<Header/>
				<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path = '/restaurants' component = { Restaurants }/>
				</Switch>
			</Router>	
		)
}

export default App;

