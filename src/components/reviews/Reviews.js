import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Product from "../product/Product";

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

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card>
      <Typography className={classes.bestH} variant="h3">
        REVIEWS
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
}
