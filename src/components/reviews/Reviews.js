import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Review from "../reviews/Review";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "6% 0",
    height: "auto",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  tile: {
    minHeight: "42vh",
  },
  bestH: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "green",
    padding: "0 6%",
    margin: "0 60% 1% 4%",
    clipPath: "polygon(4% 0, 100% 0%, 96% 100%, 0% 100%)",
  },
}));

export default function Reviews() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.bestH} variant="h4">
        REVIEWS
      </Typography>
      <GridList className={classes.gridList} cols={3.5}>
        {[0, 1, 2].map((tile, index) => (
          <GridListTile className={classes.tile} key={index}>
            <Review />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
