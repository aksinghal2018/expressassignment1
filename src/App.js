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
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import Sendproduct from './Components/Sendproduct';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link to="/" className="mr-4 text-white">Posts</Link>
            <Link to="/addpost" className="mr-4 text-white">Addpost</Link>
            <Link to="/login" className="mr-4 text-white">Login</Link>
            <Link to="/register" className="mr-4 text-white">Register</Link>
            <Link to="/product" className="mr-4 text-white">Product</Link>
            <Link to="/addproduct" className="text-white">AddProduct</Link>
          </nav>
          <Switch>
            <Route path="/addpost" exact>
              <Addpost />
            </Route>
            <Route path="/update/:id/:pname/:pdesc" exact>
              <Update />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route path="/addproduct" exact>
              <AddProduct />
            </Route>
            <Route path="/addImage/:id" exact>
              <Sendproduct />
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
