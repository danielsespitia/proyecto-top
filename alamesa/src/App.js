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

function App () {
		return (
			<Router>
			<Header></Header>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/SignUp' component={FormSignUp}/>
				</Switch>
			</Router>
		)
}

export default App;

