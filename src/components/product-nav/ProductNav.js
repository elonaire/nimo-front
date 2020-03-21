import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "../carousel/Carousel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  media: {
    height: '100%',
    // paddingTop: "56.25%", // 16:9
    marginTop: "2%",
    // minHeight: "40vh"
  },
  categoryH: {
    backgroundColor: "green",
    color: "#fff",
    "&:hover": {
      backgroundColor: "green",
      color: "#fff"
    }
  },
  categoryHIcon: {
    color: "#fff"
  },
  categoryList: {
    paddingTop: "0",
    paddingBottom: "0"
  },
  logo: {
    marginTop: '3vw'
  }
}));

export default function ProductNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Card className={classes.logo}>
            <CardMedia
              component="img"
              className={classes.media}
              image="nimologo.jpg"
              title="Welcome to Nimo Naturals"
            />
          </Card>
          <Divider />
        </Grid>
        <Grid item xs={9}>
          <Carousel />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
