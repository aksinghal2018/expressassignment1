import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Switch } from 'react-router';
import Posts from './Components/Posts';
import Addpost from './Components/Addpost';
import Update from './Components/Update';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="mr-4">Posts</Link>
            <Link to="/addpost">Addpost</Link>
          </nav>
          <Switch>
            <Route path="/addpost">
              <Addpost />
            </Route>
            <Route path="/update/:id/:pname/:pdesc">
              <Update />
            </Route>
            <Route path="/">
              <Posts />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
