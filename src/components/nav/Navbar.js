import React, { Fragment } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
// import Button from '@material-ui/core/Button';
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link as RouterLink } from "react-router-dom";
import DropdownMenu from "../dropdown-menu/DropdownMenu";
import ExpandMore from "@material-ui/icons/ExpandMore";
import auth from "../login/Auth";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: '#f0f0f0'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    color: "#696969",
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#696969",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: "#696969"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navBar: {
    backgroundColor: "#e8e8e8",
    // color: '#000'
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
  },
  cartLink: {
    display: "inline-block",
    width: "100%",
    height: "100%",
  },
  navLinks: {
    color: "#696969",
    cursor: "pointer",
    textDecoration: "none",
    margin: "10px 10px 10px 10px",
    display: "flex",
    flexDirection: "row",
  },
  signIn: {
    color: "#696969",
    cursor: "pointer",
    textDecoration: "none",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// fetchCategories();

export default function NavBar(props) {
  const classes = useStyles();
  let userMenu = [];
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  if (auth.confirmAuth()) {
    userMenu.push(<MenuItem key={0} onClick={handleMenuClose}>Profile</MenuItem>);
    userMenu.push(<MenuItem key={1} onClick={handleMenuClose}>Logout</MenuItem>);
  } else {
    userMenu = (
      <MenuItem onClick={handleMenuClose}>
        <RouterLink className={classes.signIn} to="/login">
          Sign in
        </RouterLink>
      </MenuItem>
    );
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userMenu}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <Fragment>
              <p className={classes.cartLink} {...bindTrigger(popupState)}>
                <IconButton
                  // aria-describedby={id}
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                Cart
              </p>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box p={2}>
                  <Typography>The cart is empty.</Typography>
                </Box>
              </Popover>
            </Fragment>
          )}
        </PopupState>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Nimo Naturals&trade;
          </Typography> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <RouterLink to="/" className={classes.navLinks}>
            HOME
          </RouterLink>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <RouterLink
                  to="#"
                  {...bindTrigger(popupState)}
                  className={classes.navLinks}
                >
                  SHOP BY CATEGORY
                  <ExpandMore />
                </RouterLink>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <DropdownMenu categories={props.categories} />
                </Popover>
              </div>
            )}
          </PopupState>

          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <RouterLink
                  to="#"
                  {...bindTrigger(popupState)}
                  className={classes.navLinks}
                >
                  SHOP BY CONCERNS
                  <ExpandMore />
                </RouterLink>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <DropdownMenu categories={props.categories} />
                </Popover>
              </div>
            )}
          </PopupState>

          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <RouterLink
                  to="#"
                  {...bindTrigger(popupState)}
                  className={classes.navLinks}
                >
                  COMBOS
                  <ExpandMore />
                </RouterLink>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <DropdownMenu categories={props.categories} />
                </Popover>
              </div>
            )}
          </PopupState>
          <RouterLink to="/blog" className={classes.navLinks}>
            BLOG
          </RouterLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton
                    // aria-describedby={id}
                    aria-label="show 4 new mails"
                    color="inherit"
                    {...bindTrigger(popupState)}
                  >
                    <Badge badgeContent={4} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Box p={2}>
                      <Typography>The cart is empty.</Typography>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
