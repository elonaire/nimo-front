import React, { useState } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// import { Link as RouterLink } from "react-router-dom";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Axios from "axios";

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
  fileInput: {
    display: "none",
  },
  textArea: {
    resize: "none",
    width: "100%",
    borderRadius: "5px",
    border: "0.1em solid gray",
    minHeight: "50px",
  },
  uploadBtn: {
    backgroundColor: "green",
    color: "#fff",
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [color, setColor] = useState("");
  const [response, setResponse] = useState("");
  const [productName, setProductName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(EditorState.createEmpty());
  const [files, setFiles] = useState(null);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const categoryLabel = React.useRef(null);
  const [categoryLabelWidth, setRoleLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setRoleLabelWidth(categoryLabel.current.offsetWidth);
  }, []);

  const typeLabel = React.useRef(null);
  const [typeLabelWidth, setTypeLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setTypeLabelWidth(typeLabel.current.offsetWidth);
  }, []);

  const colorLabel = React.useRef(null);
  const [colorLabelWidth, setColorLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setColorLabelWidth(colorLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescription = (description) => {
    setDescription(description);
  };

  const selectFile = (event) => {
    let selectedFiles = event.target.files;
    console.log(selectedFiles);
    setFiles(selectedFiles);
  };

  let reqBody = {
    name: productName,
    category,
    type: productType,
    gender,
    color,
    price,
    stock,
    description,
  };

  let createProductBody = (object, body) => {
    for (const prop of Object.keys(object)) {
      if (object === files) {
        body.append("productFiles", object[prop]);
      } else {
        body.append(`${prop}`, object[prop]);
      }
    }
  };

  async function addProduct(reqBody) {
    console.log("body", reqBody);
    let productDetails = new FormData();
    let token = localStorage.getItem("JWTAUTH");

    createProductBody(reqBody, productDetails);
    createProductBody(files, productDetails);

    console.log(productDetails);
    // reqBody["productFiles"] = productDetails;

    let devRemote = "http://192.168.214.206:3000/users/login";
    let devLocal = "http://localhost/users/login";
    let production = "http://34.67.57.125:3000/users/login";

    try {
      let res = await Axios({
        method: "post",
        url: production,
        data: productDetails,
        headers: {
          Authorization: token,
        },
      });

      setResponse(res.data);
    } catch (error) {
      // console.log(error.response);
      setResponse(error.response);
    }
  }

  console.log("res", response);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a New Product
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={categoryLabel} id="role-outlined-label">
                  Category
                </InputLabel>
                <Select
                  labelId="role-outlined-label"
                  id="role-outlined"
                  value={category}
                  onChange={handleCategoryChange}
                  labelWidth={categoryLabelWidth}
                >
                  <MenuItem value="ssds">
                    <em>None</em>
                  </MenuItem>
                  {() => {
                    ["0", "1", "2"].map((category, index) => (
                      <MenuItem key={index} value={category}>
                        {category}
                      </MenuItem>
                    ));
                  }}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={typeLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={productType}
                  onChange={handleTypeChange}
                  labelWidth={typeLabelWidth}
                >
                  <MenuItem value="sdds">
                    <em>None</em>
                  </MenuItem>
                  {() => {
                    ["0", "1", "2"].map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ));
                  }}
                </Select>
              </FormControl>
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
                  <MenuItem value="sds">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={colorLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Color
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={color}
                  onChange={handleColorChange}
                  labelWidth={colorLabelWidth}
                >
                  <MenuItem value="ddd">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Yellow">Yellow</MenuItem>
                  <MenuItem value="Green">Green</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={productName}
                onChange={handleNameChange}
                autoComplete="productName"
                name="productName"
                variant="outlined"
                required
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Editor
                editorState={description}
                onEditorStateChange={handleDescription}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleStockChange}
                value={stock}
                variant="outlined"
                required
                fullWidth
                id="stock"
                label="Stock"
                name="stock"
                autoComplete="stock"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePriceChange}
                value={price}
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
              />
            </Grid>

            <Grid item xs={12}>
              <input
                onChange={selectFile}
                accept="image/*"
                name="productFiles"
                className={classes.fileInput}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  className={classes.uploadBtn}
                  component="span"
                >
                  Upload files <PhotoCamera></PhotoCamera>
                </Button>
              </label>
            </Grid>
          </Grid>
          <Button
            onClick={() => addProduct(reqBody)}
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Product
          </Button>
        </form>
      </div>
    </Container>
  );
}
