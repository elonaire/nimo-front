import React, { Fragment, useEffect } from "react";
import NavBar from "../components/nav/Navbar";
import ProductNav from "../components/product-nav/ProductNav";
import Footer from "../components/footer/Footer";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import ProductDisplay from "../components/product-display/ProductDisplay";
import About from "../components/about/About";
import Reviews from "../components/reviews/Reviews";
import CircularIndeterminate from "../components/feedback/Circular";
import { Product } from "../components/utils/ApiCalls";
import { Category } from "../components/utils/ApiCalls";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: "0",
  },
  products: {
    marginTop: "2%",
  },
  sectionHeader: {
    color: "#e08455",
    // backgroundColor: ''
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const productAPI = new Product(process.env.NODE_ENV);
  const categoryAPI = new Category(process.env.NODE_ENV);
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [productsIsLoading, setProductsIsLoading] = React.useState(true);
  const [categoriesIsLoading, setCategoriesIsLoading] = React.useState(true);

  useEffect(() => {
    productAPI.fetchAllProducts(setProductsIsLoading, setProducts);
    categoryAPI.fetchCategories(setCategories, setCategoriesIsLoading);
  }, []);

  return (
    <Fragment>
      {productsIsLoading && categoriesIsLoading && (
        <Fragment>
          <CircularIndeterminate />
        </Fragment>
      )}
      {!productsIsLoading && !categoriesIsLoading && (
        <Fragment>
          <NavBar categories={categories}></NavBar>
          <Container maxWidth="lg">
            <ProductNav />
          </Container>
          <Divider />
          <ProductDisplay title="BEST SELLERS" data={products} />
          <About />
          <Reviews />
          <Footer className={classes.footer}></Footer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomePage;
