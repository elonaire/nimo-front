import React, { Fragment, useEffect } from "react";
import NavBar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import CircularIndeterminate from "../components/feedback/Circular";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

let url;

if (process.env.NODE_ENV === "development") {
  url = process.env.REACT_APP_DEV_REMOTE;
} else if (process.env.NODE_ENV === "production") {
  url = process.env.REACT_APP_PRODUCTION;
}

const ProductDetails = () => {
  const classes = useStyles();
  const [detailsIsLoading, setDetailsIsLoading] = React.useState(true);
  const [reviewsIsLoading, setReviewsIsLoading] = React.useState(true);
  const [categoriesIsLoading, setCategoriesIsLoading] = React.useState(true);
  const [imagesIsLoading, setImagesIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);

  async function fetchCategories() {
    try {
      let res = await Axios({
        method: "get",
        url: `${url + "/category?category="}`,
      });

      setCategories(res.data);
      setCategoriesIsLoading(false);
      setDetailsIsLoading(false);
      setReviewsIsLoading(false);
      setImagesIsLoading(false);
    } catch (error) {
      // console.log(error.response);
      setCategories(error.response);
      setCategoriesIsLoading(false);
      setDetailsIsLoading(false);
      setReviewsIsLoading(false);
      setImagesIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Fragment>
      {categoriesIsLoading && imagesIsLoading && detailsIsLoading && reviewsIsLoading && (
        <Fragment>
          <CircularIndeterminate />
        </Fragment>
      )}
      {!detailsIsLoading && !imagesIsLoading && !reviewsIsLoading && !categoriesIsLoading && (
        <Fragment>
          <NavBar categories={categories}></NavBar>
          <Container maxWidth="sm">
            <Grid container spacing={0}>
              <Grid item xs={5}>

              </Grid>
              <Grid item xs={7}>

              </Grid>
            </Grid>
          </Container>
          <Footer className={classes.footer}></Footer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
