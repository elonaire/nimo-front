import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { SmallProfileImg } from "./ProfileImg";
import Badge from "@material-ui/core/Badge";

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

  return (
    <Grid container spacing={0} className={classes.inboxContainer}>
      <Grid item xs={4} className={classes.messages}>
        <div className={classes.chatPreview}>
          <SmallProfileImg />
          <Badge badgeContent={1} color="secondary">
            <div className={classes.previewContent}>
              <span><strong>Jane Doe</strong></span>
              <span>Sample message...</span>
            </div>
          </Badge>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.inbox}>
          <Incoming />
          <Outgoing />
        </div>
      </Grid>
    </Grid>
  );
};

export default Inbox;
