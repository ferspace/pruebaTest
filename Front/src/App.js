import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'

function App() {
  return (
      <Router>    
        <Switch>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/"} component={()=><Login authorization={true}/>} />
        </Switch>
      </Router> 
           
  );
}

export default App;
