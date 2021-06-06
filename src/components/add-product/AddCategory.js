import React, { Fragment, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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

let url;

if (process.env.NODE_ENV === "development") {
  url = process.env.REACT_APP_DEV_REMOTE;
} else if (process.env.NODE_ENV === "production") {
  url = process.env.REACT_APP_PRODUCTION;
}

let fetchedCategories;
async function fetchCategories() {
  try {
    let res = await Axios({
      method: "get",
      url: `${url + "/category?category="}`,
    });

    fetchedCategories = res.data;
    // feedback = <AlertDialog message="Product successfully added!" />;
  } catch (error) {
    // console.log(error.response);
    fetchedCategories = error.response;
  }
}
fetchCategories();

const AddCategory = () => {
  const classes = useStyles();
  const [categoryName, setCategoryName] = useState("");
  const [addCatResponse, setAddCatResponse] = useState("");
  const [addSubCatResponse, setAddSubCatResponse] = useState("");
  const [fetchCatResponse, setFetchCatResponse] = useState(fetchedCategories);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [category, setCategory] = useState("");

  const categoryLabel = React.useRef(null);
  const [categoryLabelWidth, setRoleLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setRoleLabelWidth(categoryLabel.current.offsetWidth);
    fetchCategories();
    setFetchCatResponse(fetchedCategories);
  }, [categoryLabelWidth, fetchCatResponse]);

  const handleInputChange = (event, stateSetter) => {
    stateSetter(event.target.value);
  };

  let reqBody = {
    category: categoryName,
  };

  let reqBodySub = {
    subcategory: subCategoryName,
    category_id: category,
  };

  let resetForm = (setFieldStateArray) => {
    for (let i = 0; i < setFieldStateArray.length; i++) {
      setFieldStateArray[i]("");
    }
  };

  async function addCategory(reqBody) {
    try {
      let res = await Axios({
        method: "post",
        url: `${url + "/category"}`,
        data: reqBody,
      });

      setAddCatResponse(res.data);
      let setStateArray = [setCategoryName];
      resetForm(setStateArray);
      // feedback = <AlertDialog message="Product successfully added!" />;
    } catch (error) {
      // console.log(error.response);
      setAddCatResponse(error.response);
    }
  }

  async function addSubCategory(reqBody) {
    try {
      let res = await Axios({
        method: "post",
        url: `${url + "/category/sub-category"}`,
        data: reqBody,
      });

      setAddSubCatResponse(res.data);
      let setStateArray = [setCategoryName];
      resetForm(setStateArray);
      // feedback = <AlertDialog message="Product successfully added!" />;
    } catch (error) {
      // console.log(error.response);
      setAddSubCatResponse(error.response);
    }
  }

  return (
    <Fragment>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PlaylistAdd />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add a New Category
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={categoryName}
                  onChange={(e) => handleInputChange(e, setCategoryName)}
                  autoComplete="productName"
                  name="productName"
                  variant="outlined"
                  required
                  fullWidth
                  id="productName"
                  label="Category"
                  autoFocus
                />

                <Button
                  onClick={() => addCategory(reqBody)}
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Category
                </Button>
              </Grid>
            </Grid>
          </form>

          <Typography component="h1" variant="h5">
            Add a New Sub-category
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel required ref={categoryLabel} id="role-outlined-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="role-outlined-label"
                    id="role-outlined"
                    value={category}
                    onChange={(e) => handleInputChange(e, setCategory)}
                    labelWidth={categoryLabelWidth}
                  >
                    <MenuItem value="ssds">
                      <em>None</em>
                    </MenuItem>
                    {fetchCatResponse.map((category, index) => (
                      <MenuItem key={index} value={category.category_id}>
                        {category.category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={subCategoryName}
                  onChange={(e) => handleInputChange(e, setSubCategoryName)}
                  autoComplete="subCategoryName"
                  name="subCategoryName"
                  variant="outlined"
                  required
                  fullWidth
                  id="subCategoryName"
                  label="sub-category"
                  autoFocus
                />

                <Button
                  onClick={() => addSubCategory(reqBodySub)}
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Sub-category
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddCategory;
