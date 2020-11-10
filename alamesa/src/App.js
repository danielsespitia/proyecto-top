import './App.css';
import { 
	BrowserRouter as Router,
	Route,
	Switch,
} 
from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import FormSingUp from './pages/FormSingUp'

function App () {
		return (
			<Router>
			<Header></Header>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/SingUp' component={FormSingUp}/>
				</Switch>
			</Router>
		)
}

export default App;

