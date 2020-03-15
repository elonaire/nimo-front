import React, { Fragment } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
// import Login from "./components/login/Login";
// import AdminNav from "./components/admin-nav/AdminNav";
// import AddProduct from "./components/add-product/AddProduct";
// import AddUser from "./components/add-user/AddUser";
// import Registration from "./components/registration/Registration";
import NavBar from "./components/nav/Navbar";
import ProductNav from "./components/product-nav/ProductNav";
import Product from "./components/product/Product";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#fff"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <NavBar></NavBar>
      <ProductNav></ProductNav>
      <Container maxWidth="sm">
        {/* <Login></Login> */}
        {/* <AddProduct></AddProduct> */}
        {/* <AddUser></AddUser> */}
        {/* <Registration></Registration> */}
        <Product></Product>
      </Container>
      {/* <AdminNav></AdminNav> */}
    </Fragment>
  );
}

export default App;
