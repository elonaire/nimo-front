import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(4),
    },
  },
  progress: {
    margin: "20% auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = React.useState(true);

  const handleClose = () => {
    setOpenBackDrop(false);
  };

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={openBackDrop} onClick={handleClose}>
        <CircularProgress className={classes.progress} />
      </Backdrop>
    </div>
  );
}
