import React, { Fragment, useEffect } from "react";
import NavBar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import CircularIndeterminate from "../components/feedback/Circular";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../components/utils/ApiCalls";
import ImageGridList from "../components/product/ImageTiles";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReadOnlyRating } from "../components/rating/Rating";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
  imgContainer: {
    margin: "4% auto",
  },
  mainImg: {
    width: "100%",
    // margin: "5% auto",
    height: "40vh",
    objectFit: "cover",
  },
  particulars: {
    margin: "22% 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justify: "space-between",
  },
  stockChip: {
    backgroundColor: "green",
    margin: "5% auto",
    color: "#fff",
  },
  avatar: {
    color: "green",
  },
  actions: {
    margin: "5% auto",
    width: "70%",
    color: "green",
    borderColor: "green",
  },
  reviews: {
    display: "flex",
    flexDirection: "row",
    justify: "center",
    alignItems: "center",
  },
  reviewCount: {
    marginBottom: "20%"
  }
}));

const ProductDetails = () => {
  const classes = useStyles();
  const productsAPI = new Product(process.env.NODE_ENV);
  let { productId } = useParams();
  let randomImg;
  const [detailsIsLoading, setDetailsIsLoading] = React.useState(true);
  const [reviewsIsLoading, setReviewsIsLoading] = React.useState(false);
  const [categoriesIsLoading, setCategoriesIsLoading] = React.useState(false);
  const [imagesIsLoading, setImagesIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [productDetails, setProductDetails] = React.useState(null);
  const [productFiles, setProductFiles] = React.useState(null);
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    productsAPI.fetchProductDetails(
      setProductDetails,
      setDetailsIsLoading,
      productId
    );
    productsAPI.fetchProductFiles(
      setProductFiles,
      setImagesIsLoading,
      productId
    );
  }, []);

  console.table(productDetails);
  if (productFiles) {
    let noOfFiles = productFiles.length;
    randomImg = productFiles[Math.floor(Math.random() * noOfFiles)];
  }

  return (
    <Fragment>
      {categoriesIsLoading &&
        imagesIsLoading &&
        detailsIsLoading &&
        reviewsIsLoading && (
          <Fragment>
            <CircularIndeterminate />
          </Fragment>
        )}
      {!detailsIsLoading &&
        !imagesIsLoading &&
        !reviewsIsLoading &&
        !categoriesIsLoading && (
          <Fragment>
            <NavBar categories={categories}></NavBar>
            <Container maxWidth="lg">
              <Grid container spacing={0}>
                <Grid item xs={3}>
                  <ImageGridList files={productFiles} />
                </Grid>
                <Grid item xs={9}>
                  <Grid container spacing={0}>
                    <Grid item xs={8}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        className={classes.heading}
                      >
                        {productDetails.name}
                      </Typography>
                      <div className={classes.imgContainer}>
                        <img
                          className={classes.mainImg}
                          src={randomImg.url}
                          alt={randomImg.file_id.slice(0, 5)}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className={classes.particulars}>
                        <Typography
                          variant="h5"
                          color="textSecondary"
                          className={classes.heading}
                        >
                          Kshs. {productDetails.price}
                        </Typography>
                        <Chip
                          className={classes.stockChip}
                          avatar={<Avatar>S</Avatar>}
                          label="In Stock"
                        />
                        <ButtonGroup>
                          <Button
                            aria-label="reduce"
                            onClick={() => {
                              setCount(Math.max(count - 1, 0));
                            }}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Button aria-label="no">{count}</Button>
                          <Button
                            aria-label="increase"
                            onClick={() => {
                              setCount(count + 1);
                            }}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </ButtonGroup>
                        <Button
                          className={classes.actions}
                          variant="outlined"
                          square="true"
                        >
                          Add to Cart
                        </Button>
                        <div className={classes.reviews}>
                          <ReadOnlyRating />
                          <p className={classes.reviewCount}>(10 Reviews)</p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider light />
                <Grid item xs={12}>
                  <Container maxWidth="md">
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      className={classes.heading}
                    >
                      Description and Usage
                    </Typography>
                  </Container>
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
