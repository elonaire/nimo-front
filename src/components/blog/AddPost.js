import React, { useState, useRef, useEffect, Fragment } from "react";
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
import { Blog } from "../utils/ApiCalls";
import CircularIndeterminate from "../feedback/Circular";

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
  editor: {
    resize: "none",
    width: "100%",
    borderRadius: "5px",
    border: "0.05em solid gray",
    minHeight: "100px",
  },
}));

export default function AddPost() {
  const classes = useStyles();
  // const [category, setRole] = useState("");
  const blogAPI = new Blog(process.env.NODE_ENV);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState(EditorState.createEmpty());
  const [response, setResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(null);

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

  let reqBody = {
    title,
    author,
    post,
  };

  let setStateArray = [setTitle, setAuthor, setPost];

  let submitPost = () => {
    blogAPI.createBlogPost(setResponse, setStateArray, {
      reqBody,
      setIsLoading: setIsSubmitting,
    });
  };

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
        <Fragment>
          {isSubmitting && (
            <Fragment>
              <CircularIndeterminate />
            </Fragment>
          )}
          {!isSubmitting && (
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
                    placeholder="Start typing Post here..."
                    editorClassName={classes.editor}
                    editorState={post}
                    onEditorStateChange={handleEditorChanges}
                  />
                </Grid>
              </Grid>
              <Button
                // type="submit"
                onClick={() => submitPost()}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Post
              </Button>
            </form>
          )}
        </Fragment>
      </div>
    </Container>
  );
}
