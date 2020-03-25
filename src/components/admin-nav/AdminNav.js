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
import PostAdd from "@material-ui/icons/PostAdd";
import AdminPanel from "../../pages/AdminPanel";
import ManageUsers from "../../pages/ManageUsers";
import Inbox from "../../pages/Inbox";
import ManageOrders from "../../pages/ManageOrders";
import ManageProducts from "../../pages/ManageProducts";
import ManageBlog from "../../pages/ManageBlog";

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
    backgroundColor: '#fff',
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
  const [showDash, setShowDash] = React.useState(true);
  const [showInbox, setShowInbox] = React.useState(false);
  const [showOrders, setShowOrders] = React.useState(false);
  const [showProducts, setShowProducts] = React.useState(false);
  const [showUsers, setShowUsers] = React.useState(false);
  const [showBlog, setShowBlog] = React.useState(false);
  let section;

  const navigateDashboard = (link) => {
    console.log(link);
    let navigationControls = [setShowDash, setShowInbox, setShowOrders, setShowProducts, setShowUsers, setShowBlog];

    if (link === 'dash') {
      navigationControls.map((setActive, index) => index === 0 ? setActive(true) : setActive(false));
    } else if (link === 'inbox') {
      navigationControls.map((setActive, index) => index === 1 ? setActive(true) : setActive(false));
    } else if (link === 'orders') {
      navigationControls.map((setActive, index) => index === 2 ? setActive(true) : setActive(false));
    } else if (link === 'products') {
      navigationControls.map((setActive, index) => index === 3 ? setActive(true) : setActive(false));
    } else if (link === 'users') {
      navigationControls.map((setActive, index) => index === 4 ? setActive(true) : setActive(false));
    } else if (link === 'blog') {
      navigationControls.map((setActive, index) => index === 5 ? setActive(true) : setActive(false));
    }
  }

  if (showDash) {
    section = <AdminPanel />;
  } else if (showInbox) {
    section = <Inbox />
  } else if (showOrders) {
    section = <ManageOrders />
  } else if (showProducts) {
    section = <ManageProducts />
  } else if (showUsers) {
    section = <ManageUsers />
  } else if (showBlog) {
    section = <ManageBlog />
  }

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
          <ListItem onClick={() => navigateDashboard('dash')} button>
            <ListItemIcon>
              <Laptop className={classes.navIcon}></Laptop>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem onClick={() => navigateDashboard('inbox')} button>
            <ListItemIcon>
              <Chat className={classes.navIcon}></Chat>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem onClick={() => navigateDashboard('orders')} button>
            <ListItemIcon>
              <FlightTakeoff className={classes.navIcon}></FlightTakeoff>
            </ListItemIcon>
            <ListItemText primary="Manage Orders" />
          </ListItem>

          <ListItem onClick={() => navigateDashboard('products')} button>
            <ListItemIcon>
              <Create className={classes.navIcon}></Create>
            </ListItemIcon>
            <ListItemText primary="Manage Products" />
          </ListItem>

          <ListItem onClick={() => navigateDashboard('users')} button>
            <ListItemIcon>
              <Group className={classes.navIcon}></Group>
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItem>

          <ListItem onClick={() => navigateDashboard('blog')} button>
            <ListItemIcon>
              <PostAdd className={classes.navIcon}></PostAdd>
            </ListItemIcon>
            <ListItemText primary="Manage Blog" />
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
        {section}
      </main>
    </div>
  );
}
