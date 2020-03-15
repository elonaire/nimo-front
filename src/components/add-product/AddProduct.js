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
    color: '#fff'
  },
}));

const AddProduct = () => {
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
        title="Add a New Product"
      ></CardHeader>
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Category
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Type
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Color
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />

          <TextareaAutosize
            className={classes.textArea}
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Description..."
          ></TextareaAutosize>

          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />

          <TextField
            fullWidth
            className={classes.field}
            id="outlined-basic"
            label="Stock"
            variant="outlined"
          />
          <input
            accept="image/*"
            className={classes.fileInput}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" className={classes.uploadBtn} component="span">
              Upload files <PhotoCamera></PhotoCamera>
            </Button>
          </label>
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

export default AddProduct;
