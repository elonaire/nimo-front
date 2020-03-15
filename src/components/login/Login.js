import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    alignItems: "center",
    width: "50vw"
  },
  field: {
    display: "block"
  },
  loginButton: {
    backgroundColor: 'green',
    color: '#fff'
  }
}));

const Login = () => {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.card}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </form>
      </CardContent>
      <CardActions>
        <Button fullWidth size="large" variant="contained" className={classes.loginButton}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
