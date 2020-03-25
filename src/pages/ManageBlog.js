import React from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { createColumns } from "../components/CreateColumns"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#60de50",
    "&:hover": {
      backgroundColor: "#e08455"
    },
    color: "#ebebeb"
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%"
  },
}));

const ManageBlog = () => {
  const classes = useStyles();
  const [userRole, setRole] = React.useState("");

  const roleLabel = React.useRef(null);
  const [roleLabelWidth, setRoleLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setRoleLabelWidth(roleLabel.current.offsetWidth);
  }, []);


  const handleRoleChange = event => {
    setRole(event.target.value);
  };

  const columnNames = ['Title', 'Author', 'Date', 'Number of comments', 'Link']
  const columnObject = {
    title: null,
    field: null
  }

  let columns = []
  const data = []

  columns = createColumns(columnNames, columnObject, columns);


  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MatTable
          data={data}
          columns={columns}
          title="Blog Posts"
        />
      </Grid>
      <Grid item xs={12}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Blog Post
        </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={roleLabel} id="role-outlined-label">
                      Category
                </InputLabel>
                    <Select
                      labelId="role-outlined-label"
                      id="role-outlined"
                      value={userRole}
                      onChange={handleRoleChange}
                      labelWidth={roleLabelWidth}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>PUBLIC</MenuItem>
                      <MenuItem value={20}>ADMIN</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                  <Editor />
                </Grid>
              </Grid>
              <Button
                type="submit"
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
      </Grid>
    </Grid>
  );
};

export default ManageBlog;
