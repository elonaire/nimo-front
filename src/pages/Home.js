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
import Axios from "axios";

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

let url;

if (process.env.NODE_ENV === "development") {
  url = process.env.REACT_APP_DEV_REMOTE;
} else if (process.env.NODE_ENV === "production") {
  url = process.env.REACT_APP_PRODUCTION;
}

const HomePage = () => {
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [productsIsLoading, setProductsIsLoading] = React.useState(true);
  const [categoriesIsLoading, setCategoriesIsLoading] = React.useState(true);

  const fetchProducts = async () => {
    let res = await Axios({
      method: "get",
      url: `${url + "/products"}`,
    });

    setProducts(res.data);
    setProductsIsLoading(false);
  };

  async function fetchCategories() {
    try {
      let res = await Axios({
        method: "get",
        url: `${url + "/category?category="}`,
      });

      setCategories(res.data);
      setCategoriesIsLoading(false);
    } catch (error) {
      // console.log(error.response);
      setCategories(error.response);
      setCategoriesIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
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
