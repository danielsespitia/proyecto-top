import './App.css';
import { 
	BrowserRouter as Router,
	Route,
	Switch,
} 
from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

function App () {
	return (
		<Router>
			<Header/>
			<Switch>
				<Route exact path='/' component={ Home }/>
				<Route exact path = '/restaurants' component = { Restaurants }/>
			</Switch>
		</Router>	
	)
}

export default App;

