import React from "react";
import Product from "../product/Product";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "5% 0"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  bestH: {
    textAlign: "center",
    color: "#696969"
  },
  tile: {
    minHeight: "42vh"
  }
}));

const ProductDisplay = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.bestH} variant="h4">
        {props.title}
      </Typography><br />
      <GridList className={classes.gridList} cols={5}>
        {props.data.map((product, index) => (
          <GridListTile className={classes.tile} key={index}>
            <Product productDetails={product} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ProductDisplay;
