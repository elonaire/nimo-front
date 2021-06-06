import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
// import {
//   Link as RouterLink
// } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#60de50",
    "&:hover": {
      backgroundColor: "#e08455",
    },
    color: "#ebebeb",
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export default function AddUser() {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");
  const [userRole, setRole] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState(null);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const roleLabel = React.useRef(null);
  const [roleLabelWidth, setRoleLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setRoleLabelWidth(roleLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleInputChanges = (event, cb) => {
    cb(event.target.value);
  };

  let resetForm = (setFieldStateArray) => {
    for (let i = 0; i < setFieldStateArray.length; i++) {
      setFieldStateArray[i]("");
    }
  };

  let reqBody = {
    user_role: userRole,
    gender,
    username,
    email,
    first_name: firstName,
    last_name: lastName,
    phone,
    password,
  };

  let addUser = async (reqBody) => {
    console.log(reqBody);
    
    let url;

    if (process.env.NODE_ENV === "development") {
      url = process.env.REACT_APP_DEV_REMOTE;
    } else if (process.env.NODE_ENV === "production") {
      url = process.env.REACT_APP_PRODUCTION;
    }

    try {
      let res = await Axios({
        method: "post",
        url: `${url + '/users/add-user'}`,
        data: reqBody
      });

      setResponse(res.data);
      let setStateArray = [
        setGender,
        setRole,
        setUsername,
        setFirstName,
        setLastName,
        setPhone,
        setEmail,
        setPassword,
      ];
      resetForm(setStateArray);
    } catch (error) {
      setResponse(error.response);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a New User
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={roleLabel} id="role-outlined-label">
                  User Role
                </InputLabel>
                <Select
                  labelId="role-outlined-label"
                  id="role-outlined"
                  value={userRole}
                  onChange={handleRoleChange}
                  labelWidth={roleLabelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="PUBLIC">PUBLIC</MenuItem>
                  <MenuItem value="ADMIN">ADMIN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={(e) => handleInputChanges(e, setFirstName)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                onChange={(e) => handleInputChanges(e, setLastName)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={(e) => handleInputChanges(e, setUsername)}
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="uname"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={gender}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phone}
                onChange={(e) => handleInputChanges(e, setPhone)}
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(e) => handleInputChanges(e, setEmail)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e) => handleInputChanges(e, setPassword)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            onClick={() => addUser(reqBody)}
            // type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add User
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <RouterLink to="/login" variant="body2">
                Already have an account? Sign in
              </RouterLink>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}
