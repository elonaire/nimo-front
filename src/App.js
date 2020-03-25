import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Register";
import AdminNav from './components/admin-nav/AdminNav';
import Blog from './pages/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact component={LoginPage} path="/login" />
          <Route exact component={RegistrationPage} path="/registration" />
          <Route exact component={HomePage} path="/" />
          <Route exact component={AdminNav} path="/admin-dashboard" />
          <Route exact component={Blog} path="/blog" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
