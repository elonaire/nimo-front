import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    width: "auto",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "auto 2%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    // marginTop: "2%"
  },
  avatar: {
    backgroundColor: red[500],
  },
  actions: {
    margin: "5% auto",
    width: "70%",
    color: "green",
    borderColor: "green",
  },
  product: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    // marginLeft: "2%",
    "&:hover": {
      textDecoration: "none",
    },
  },
  content: {
    textAlign: "center",
  },
}));

export default function Product(props) {
  const classes = useStyles();
  // const [] = React.useState(false);

  return (
    <Card variant="outlined" elevation={0} className={classes.root} square>
      <RouterLink
        className={classes.product}
        color="inherit"
        to={"/products/" + props.productDetails.product_id}
      >
        <CardMedia
          className={classes.media}
          image="blackcastoroil.jpg"
          title="Black Castor Oil"
        />
        <Divider />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="h4">
            {props.productDetails.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Kshs. {props.productDetails.price}
          </Typography>
        </CardContent>
      </RouterLink>
      <Button className={classes.actions} variant="outlined" square="true">
        Add to Cart
      </Button>
    </Card>
  );
}
