import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
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
  cardHeader: {
    backgroundColor: "#41e044",
    color: "#fff"
  },
  field: {
    display: "block"
  },
  addButton: {
    backgroundColor: "green",
    color: "#fff"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  fileInput: {
    display: "none"
  },
  textArea: {
    resize: "none",
    width: "100%",
    borderRadius: "5px",
    border: "0.1em solid gray",
    minHeight: "50px"
  },
  uploadBtn: {
    backgroundColor: "green",
    color: "#fff"
  }
}));

const AddUser = () => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <Card elevation={3} className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title="Add a New User"
      ></CardHeader>
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              User role
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              //   value={age}
              //   onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>PUBLIC USER</MenuItem>
              <MenuItem value={0}>ADMIN</MenuItem>
              <MenuItem value={2}>SYSTEM ADMIN</MenuItem>
            </Select>
          </FormControl>

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
            label="First name"
            variant="outlined"
          />

          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Last name"
            variant="outlined"
          />

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              //   value={age}
              //   onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={0}>Female</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />

          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Email"
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
        <Button
          fullWidth
          size="large"
          variant="contained"
          className={classes.addButton}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddUser;
