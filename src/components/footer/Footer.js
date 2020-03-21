
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import {
  Link as RouterLink
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Nimo Naturals
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '40vh',
    backgroundColor: 'green',
    bottom: '0',
    margin: '2% 0 0 0'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  footerLinks: {
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  linkTitle: {
    color: '#E08455'
  },
  contacts: {
    color: '#fff',
    display: 'flex'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid className={classes.main} container spacing={0}>
          <Grid item xs={3}>
            <Typography className={classes.linkTitle} variant="h6">Help Center</Typography>
            {/* <div><Link className={classes.footerLinks}></Link></div> */}
            <div><Link className={classes.footerLinks}>Nimo Naturals Privacy Policy</Link></div>
            <div><Link className={classes.footerLinks}>After Sale Policy</Link></div>
            <div><Link className={classes.footerLinks}>Delivery and Shipping</Link></div>
            <div><Link className={classes.footerLinks}>Payment Methods</Link></div>
            <div><Link className={classes.footerLinks}>Order</Link></div>
            <div><RouterLink to="/login" className={classes.footerLinks}>Account Settings</RouterLink></div>
            <div><Link className={classes.footerLinks}>FAQ Center</Link></div>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.linkTitle} variant="h6">Connect with us</Typography>
            <div><Link target="_blank" href="https://www.facebook.com/nimonaturals-106906714043490/" className={classes.footerLinks}>Follow us on Facebook</Link></div>
            <div><Link target="_blank" href="https://www.instagram.com/nimonaturals/" className={classes.footerLinks}>Follow us on Instagram</Link></div>
            <div><Link className={classes.footerLinks}>Follow us on Twitter</Link></div>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.linkTitle} variant="h6">Contact us</Typography>
            <div><Link className={classes.contacts}><PhoneIcon />0791 529944</Link></div>
          </Grid>
          <Grid item xs={3}>

          </Grid>
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="xs">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}