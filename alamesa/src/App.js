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

function App () {
		return (
			<Layout>
				<Switch>
					<Router>
						<Route exact path='/' component={Home}/>
					</Router>
				</Switch>
			</Layout>	
		)
}

export default App;

