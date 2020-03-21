import React, { Fragment } from "react";
import NavBar from "../components/nav/Navbar";
import ProductNav from "../components/product-nav/ProductNav";
import Footer from "../components/footer/Footer";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import BestSellers from '../components/best-sellers/BestSellers';
import About from "../components/about/About";
import Reviews from "../components/reviews/Reviews";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: "0"
  },
  products: {
    marginTop: "2%"
  },
  sectionHeader: {
    color: "#e08455"
    // backgroundColor: ''
  },
  
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <NavBar></NavBar>
      <Container maxWidth="lg">
        <ProductNav></ProductNav>
      </Container>
      <Divider />
      <BestSellers />
      <About />
      <Reviews />
      <Footer className={classes.footer}></Footer>
    </Fragment>
  );
};

export default HomePage;
