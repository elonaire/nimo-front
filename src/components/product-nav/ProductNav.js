import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListIcon from "@material-ui/icons/List";
import LocalPharmacy from "@material-ui/icons/LocalPharmacy";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import NavigateNext from "@material-ui/icons/NavigateNext";
import Carousel from "../carousel/Carousel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: "2%"
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
  }
}));

export default function ProductNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image="nimologo.jpg"
              title="Welcome to Nimo Naturals"
            />
          </Card>
          <List
            component="nav"
            className={classes.categoryList}
            aria-label="main categories"
          >
            <ListItem className={classes.categoryH} button>
              <ListItemIcon>
                <ListIcon className={classes.categoryHIcon} />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalPharmacy />
              </ListItemIcon>
              <ListItemText primary="Skincare" /> <NavigateNext />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalPharmacy />
              </ListItemIcon>
              <ListItemText primary="Body" /> <NavigateNext />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalPharmacy />
              </ListItemIcon>
              <ListItemText primary="Sets &amp; Sales" /> <NavigateNext />
            </ListItem>
          </List>
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
