import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import Axios from "axios";
import auth from "./Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#60de50",
    "&:hover": {
      backgroundColor: "#e08455",
    },
    color: "#ebebeb",
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  const handleFieldInput = (event, field) => {
    console.log(event.target.value);
    if (field === "username") {
      setUsername(event.target.value);
    } else if (field === "password") {
      setPassword(event.target.value);
    }
  };

  let reqBody = {
    username,
    password,
  };

  let devRemote = "http://192.168.214.206:3000/users/login";
  let devLocal = "http://localhost/users/login";
  let production = "http://34.67.57.125:3000/users/login";

  let login = async (reqBody) => {
    try {
      let res = await Axios({
        method: "post",
        url: production,
        data: reqBody,
      });

      setResponse(res.data);
    } catch (error) {
      // console.log(error.response);
      setResponse(error.response);
    }
  };

  if (response.user) {
    localStorage.setItem("JWTAUTH", response.JWTAUTH);
    localStorage.setItem("userRole", response.user.userRole);

    let userRole = localStorage.getItem('userRole');
    let token = localStorage.getItem('JWTAUTH');

    console.log('userRole', userRole);
    

    if (userRole === 'ADMIN' && token) {
      auth.login(() => {
        props.history.push("/admin-dashboard");
      });
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={(e) => handleFieldInput(e, "username")}
            value={username}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => handleFieldInput(e, "password")}
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={() => login(reqBody)}
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <RouterLink to="/registration" variant="body2">
                {"Don't have an account? Sign Up"}
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
