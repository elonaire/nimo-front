import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
import Product from "../product/Product";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bestH: {
    textAlign: "center",
    color: "#e08455"
  },
  product: {
    textDecoration: "none",
    marginLeft: "2%",
    "&:hover": {
      textDecoration: "none"
    }
  },
  bestSellers: {
    textAlign: 'center',
    alignContent: 'justify'
  }
}));

const BestSellers = () => {
  const classes = useStyles();
  return (
    <Card>
      <Typography className={classes.bestH} variant="h3">
        BEST SELLERS
      </Typography>
      <CardContent>
        <Grid className={classes.bestSellers} container spacing={1}>
          {[0, 1, 2].map((p, index) => (
              <Grid key={index} item xs>
                <Product />
              </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BestSellers;
