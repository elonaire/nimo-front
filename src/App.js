import React from "react";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Register";
import AdminNav from "./components/admin-nav/AdminNav";
import Blog from "./pages/Blog";
import ProductDetails from "./pages/ProductDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
  // Link
} from "react-router-dom";
import ProtectedRoute from "./components/login/ProtectedRoute";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact component={LoginPage} path="/login" />
          <Route exact component={RegistrationPage} path="/registration" />
          <Route exact component={HomePage} path="/" />
          <ProtectedRoute exact component={AdminNav} path="/admin-dashboard" />
          <Route exact component={Blog} path="/blog" />
          <ProtectedRoute exact component={UserAccount} path="/profile/:userId" />
          <Route exact component={ProductDetails} path="/products/:productId" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
