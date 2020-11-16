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
import SanitaryRegister from './pages/SanitaryRegister'
import ClientProfile from './pages/ClientProfile'

function App () {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={FormSignUp}/>
        <Route exact path="/sanitary-register" component={SanitaryRegister}/>
        <Route exact path="/client-profile" component={ClientProfile}/>
      </Switch>
    </Router>
  )
}

export default App;

