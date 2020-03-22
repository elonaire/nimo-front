import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    // margin: "0 1% 2% 1%"
    height: '32vh',
    margin: '5% 0'
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    // width: 151
    height: '100%',
    objectFit: 'contain'
  },
  aboutTitle: {
    textAlign: "center",
    color: "#e08455"
  },
  aboutSub: {
    textAlign: "center",
    alignContent: "justify",
    color: "#19fc1d"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column"
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row"
  }
}));

export default function About() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.aboutTitle} variant="h3">
        NIMO NATURALS®
      </Typography>
      <Typography className={classes.aboutSub} variant="h4">
        HARNESSES THE POWER OF PLANT-BASED INGREDIENTS AND EXTRACTS TO DELIVER
        FUNCTIONAL SKINCARE BENEFITS.
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <CardMedia
                  className={classes.cover}
                  image="science.jpg"
                  title="Live from space album cover"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <CardMedia
                  className={classes.cover}
                  image="nature.jpg"
                  title="Live from space album cover"
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
