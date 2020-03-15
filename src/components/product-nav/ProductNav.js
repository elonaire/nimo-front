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
// import Carousel from "../carousel/Carousel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  carousel: {},
  header: {
    alignItems: "center",
    height: 50,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    overflow: "hidden",
    width: "100%",
    objectFit: "cover"
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
              <ListItemText primary="Health and Beauty" /> <NavigateNext />
            </ListItem>
          </List>
          <Divider />
          {/* <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List> */}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={9}>
          {/* <Carousel /> */}
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
