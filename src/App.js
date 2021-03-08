import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import NavBar from './components/NavBars/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
     <Router>
       <NavBar></NavBar>
        <section>
          <Switch>
            <Route path="/" exact>
              <section>Home</section>
            </Route>
            <Route path="/login" exact>
              <Login></Login>
            </Route>
          </Switch>
        </section>
     </Router>
  );
}

export default App;
