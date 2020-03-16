import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import { Divider } from "@material-ui/core";
import { ReadOnlyRating } from "../rating/Rating";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    marginTop: "2%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: "2%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Product() {
  const classes = useStyles();
  const [] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="blackcastoroil.jpg"
        title="Black Castor Oil"
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h4">
        Black Castor Oil
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Kshs. 400
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ReadOnlyRating />
      </CardActions>
    </Card>
  );
}
