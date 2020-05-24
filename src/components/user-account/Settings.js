import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

const Settings = () => {
  const classes = useStyles();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (event, stateSetter) => {
    stateSetter(event.target.value);
  };

  return (
    <Container component="main" maxWidth="sm">
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => handleInputChange(e, setOldPassword)}
              value={oldPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="oldpassword"
              label="Old Password"
              type="password"
              id="oldPassword"
              autoComplete="old-password"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) => handleInputChange(e, setNewPassword)}
              value={newPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="New Password"
              type="password"
              id="newPassword"
              autoComplete="new-password"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) => handleInputChange(e, setConfirmPassword)}
              value={confirmPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm-password"
            />
          </Grid>
        </Grid>
        <Button
          //   onClick={() => submitProduct()}
          // type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Change Password
        </Button>
      </form>
    </Container>
  );
};

export default Settings;
