import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import PostAdd from "@material-ui/icons/PostAdd";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";

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

export default function AddPost() {
  const classes = useStyles();
  // const [category, setRole] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState(EditorState.createEmpty());
  const [response, setResponse] = useState(null);

  // const roleLabel = useRef(null);
  // const [categoryLabelWidth, setCategoryLabelWidth] = useState(0);
  // useEffect(() => {
  //   setCategoryLabelWidth(roleLabel.current.offsetWidth);
  // }, []);

  // const handleCategoryChange = (event) => {
  //   setRole(event.target.value);
  // };

  const handleEditorChanges = (post) => {
    setPost(post);
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
    title,
    author,
    post,
  };

  let submitPost = async (reqBody) => {
    console.log(reqBody);

    // let token = localStorage.getItem("JWTAUTH");
    let url;

    if (process.env.NODE_ENV === "development") {
      url = process.env.REACT_APP_DEV_REMOTE;
    } else if (process.env.NODE_ENV === "production") {
      url = process.env.REACT_APP_PRODUCTION;
    }

    try {
      let res = await Axios({
        method: "post",
        url: `${url + "/blog/create"}`,
        data: reqBody,
      });

      setResponse(res.data);
      let setStateArray = [setTitle, setAuthor, setPost];
      resetForm(setStateArray);
    } catch (error) {
      setResponse(error.response);
    }
  };

  console.log(response);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Blog Post
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={roleLabel} id="role-outlined-label">
                  Category
                </InputLabel>
                <Select
                  labelId="role-outlined-label"
                  id="role-outlined"
                  value={category}
                  onChange={handleCategoryChange}
                  labelWidth={categoryLabelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>PUBLIC</MenuItem>
                  <MenuItem value={20}>ADMIN</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                value={author}
                onChange={(e) => handleInputChanges(e, setAuthor)}
                variant="outlined"
                required
                fullWidth
                id="author"
                label="Author"
                name="author"
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={title}
                onChange={(e) => handleInputChanges(e, setTitle)}
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={12}>
              <Editor
                editorState={post}
                onEditorStateChange={handleEditorChanges}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            onClick={() => submitPost(reqBody)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Post
          </Button>
        </form>
      </div>
    </Container>
  );
}
