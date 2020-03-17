import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Laptop from "@material-ui/icons/Laptop";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Create from "@material-ui/icons/Create";
import Chat from "@material-ui/icons/Chat";
import Group from "@material-ui/icons/Group";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import Grid from '@material-ui/core/Grid';
import Stats from '../stats/Stats';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#323741",
    color: '#A1A8B8'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#323741',
    color: '#A1A8B8'
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    color: '#A1A8B8'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    backgroundColor: '#292D36',
    minHeight: '100vh'
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  navIcon: {
    color: '#A1A8B8'
  },
}));

export default function AdminNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Nimo Naturals Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon className={classes.navIcon} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Laptop className={classes.navIcon}></Laptop>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Chat className={classes.navIcon}></Chat>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FlightTakeoff className={classes.navIcon}></FlightTakeoff>
            </ListItemIcon>
            <ListItemText primary="Manage Orders" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Create className={classes.navIcon}></Create>
            </ListItemIcon>
            <ListItemText primary="Manage Products" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Group className={classes.navIcon}></Group>
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.dashboard}>
        <div className={classes.root}>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Stats
          name="Orders"
           />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Stats
          name="Users"
           />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Stats
          name="Sales"
           />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Stats
          name="Profits"
           />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          {/* <LatestSales /> */}
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          {/* <UsersByDevice /> */}
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          {/* <LatestProducts /> */}
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          {/* <LatestOrders /> */}
        </Grid>
      </Grid>
    </div>
        </div>
      </main>
    </div>
  );
}
