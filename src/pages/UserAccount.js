import React, { Fragment, useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/Navbar";
import { Category } from "../components/utils/ApiCalls";
import CircularIndeterminate from "../components/feedback/Circular";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
// import Laptop from "@material-ui/icons/Laptop";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Settings from "@material-ui/icons/Settings";
import Chat from "@material-ui/icons/Chat";
import Notifications from "@material-ui/icons/Notifications";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import Feedback from "@material-ui/icons/Feedback";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SettingsComponent from "../components/user-account/Settings";
import ProfileImg from "../components/user-account/ProfileImg";
import Inbox from "../components/user-account/Inbox";
import MyOrders from "../components/user-account/MyOrders";

const useStyles = makeStyles((theme) => ({
  sideNav: {
    backgroundColor: "#E8E8E8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userAccount: {
    marginTop: "10px",
    borderTop: "0.05em solid #E8E8E8",
    borderBottom: "0.05em solid #E8E8E8",
    borderRight: "0.05em solid #E8E8E8",
  },
}));

const UserAccount = () => {
  const classes = useStyles();
  const categoryAPI = new Category(process.env.NODE_ENV);
  const [categoriesIsLoading, setCategoriesIsLoading] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  // const [open, setOpen] = React.useState(false);
  // const [showDash, setShowDash] = React.useState(true);
  const [showInbox, setShowInbox] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  let section;

  const navigateDashboard = (link) => {
    console.log(link);
    let navigationControls = [
      setShowInbox,
      setShowOrders,
      setShowSettings,
      setShowNotifications,
      setShowFeedback,
    ];

    if (link === "inbox") {
      navigationControls.map((setActive, index) =>
        index === 0 ? setActive(true) : setActive(false)
      );
    } else if (link === "orders") {
      navigationControls.map((setActive, index) =>
        index === 1 ? setActive(true) : setActive(false)
      );
    } else if (link === "settings") {
      navigationControls.map((setActive, index) =>
        index === 2 ? setActive(true) : setActive(false)
      );
    } else if (link === "notifications") {
      navigationControls.map((setActive, index) =>
        index === 3 ? setActive(true) : setActive(false)
      );
    } else if (link === "feedback") {
      navigationControls.map((setActive, index) =>
        index === 4 ? setActive(true) : setActive(false)
      );
    }
  };

  if (showInbox) {
    section = <Inbox />;
  } else if (showOrders) {
    section = <MyOrders />;
  } else if (showSettings) {
    section = <SettingsComponent />;
  } else if (showNotifications) {
    section = <div>Notifications</div>;
  } else if (showFeedback) {
    section = <div>Feedback</div>;
  }

  useEffect(() => {
    categoryAPI.fetchCategories(setCategories, setCategoriesIsLoading);
  }, []);

  return (
    <Fragment>
      {categoriesIsLoading && (
        <Fragment>
          <CircularIndeterminate />
        </Fragment>
      )}
      {!categoriesIsLoading && (
        <Fragment>
          <NavBar categories={categories} />
          <Container maxWidth="lg" className={classes.userAccount}>
            <Grid container spacing={0}>
              <Grid item xs={3} className={classes.sideNav}>
                <ProfileImg />
                <List>
                  <ListItem onClick={() => navigateDashboard("inbox")} button>
                    <ListItemIcon>
                      <Chat className={classes.navIcon}></Chat>
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>

                  <ListItem onClick={() => navigateDashboard("orders")} button>
                    <ListItemIcon>
                      <FlightTakeoff
                        className={classes.navIcon}
                      ></FlightTakeoff>
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                  </ListItem>

                  <ListItem
                    onClick={() => navigateDashboard("notifications")}
                    button
                  >
                    <ListItemIcon>
                      <Notifications
                        className={classes.navIcon}
                      ></Notifications>
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                  </ListItem>

                  <ListItem
                    onClick={() => navigateDashboard("feedback")}
                    button
                  >
                    <ListItemIcon>
                      <Feedback className={classes.navIcon}></Feedback>
                    </ListItemIcon>
                    <ListItemText primary="Feedback" />
                  </ListItem>

                  <ListItem
                    onClick={() => navigateDashboard("settings")}
                    button
                  >
                    <ListItemIcon>
                      <Settings className={classes.navIcon}></Settings>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={9}>
                {section}
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserAccount;
