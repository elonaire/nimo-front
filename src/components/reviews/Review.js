import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormatQuote from '@material-ui/icons/FormatQuote';
import { ReadOnlyRating } from "../rating/Rating";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: '0 1%'
  },
  details: {
    display: "flex",
    flexDirection: "column",
    // width: '50%'
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: '50%'
  },
}));

export default function Review() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card variant="outlined" elevation={0} className={classes.root} square>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            ~Elon Aseneka
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <FormatQuote />Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
          <ReadOnlyRating />
        </CardContent>
      </div>
    </Card>
  );
}
