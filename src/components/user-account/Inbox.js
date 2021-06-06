import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SmallProfileImg } from "./ProfileImg";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  inboxContainer: {
    height: "100%",
  },
  inbox: {
    padding: "5px",
  },
  messages: {
    borderRight: "0.05em solid #E8E8E8",
    height: "inherit",
  },
  outgoingOuterWrapper: {
    display: "flex",
    flexDirection: "column",
    float: "right",
    width: "50%",
  },
  incomingOuterWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  outgoing: {
    borderRadius: "5px",
    backgroundColor: "green",
    minHeight: "40px",
    width: "100%",
    padding: "5px",
    color: "#fff",
  },
  incoming: {
    borderRadius: "5px",
    backgroundColor: "#E8E8E8",
    minHeight: "40px",
    width: "50%",
    padding: "5px",
    color: "#fff",
  },
  incomingWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  chatPreview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justify: "center",
    borderBottom: "0.05em solid #E8E8E8",
    padding: "15px",
    cursor: "pointer",
  },
  previewContent: {
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#60de50",
    "&:hover": {
      backgroundColor: "#e08455",
    },
    color: "#ebebeb",
  },
  form: {
    position: "relative",
    bottom: "0"
  },
  msgInput: {
    padding: "2px 0"
  }
}));

function Outgoing() {
  const classes = useStyles();
  return (
    <div className={classes.outgoingOuterWrapper}>
      <div className={classes.outgoing}>Message sample</div>
      <p>10:45 AM</p>
    </div>
  );
}

function Incoming() {
  const classes = useStyles();
  return (
    <div className={classes.incomingOuterWrapper}>
      <div className={classes.incomingWrapper}>
        <SmallProfileImg />
        <div className={classes.incoming}> Message sample</div>
      </div>
      <p>10:45 AM</p>
    </div>
  );
}

const Inbox = () => {
  const classes = useStyles();
  const [message, setMessage] = React.useState("");

  const handleInputChanges = (event, cb) => {
    cb(event.target.value);
  };

  return (
    <Grid container spacing={0} className={classes.inboxContainer}>
      <Grid item xs={4} className={classes.messages}>
        <div className={classes.chatPreview}>
          <SmallProfileImg />
          <Badge badgeContent={1} color="secondary">
            <div className={classes.previewContent}>
              <span>
                <strong>Jane Doe</strong>
              </span>
              <span>Sample message...</span>
            </div>
          </Badge>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.inbox}>
          <Incoming />
          <Outgoing />
          {/* <div>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    value={message}
                    onChange={(e) => handleInputChanges(e, setMessage)}
                    variant="outlined"
                    // required
                    // fullWidth
                    // id="message"
                    // label="Type your message..."
                    // name="message"
                    // autoComplete="message"
                    placeholder="Type your message..."
                    className={classes.msgInput}
                  />
                  <Button
                    // onClick={() => addUser(reqBody)}
                    // type="button"
                    // fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div> */}
        </div>
      </Grid>
    </Grid>
  );
};

export default Inbox;
