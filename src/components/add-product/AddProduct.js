// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
// // import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1)
//     }
//   },
//   card: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     alignItems: "center",
//     width: "50vw"
//   },
//   cardHeader: {
//     backgroundColor: "#41e044",
//     color: "#fff"
//   },
//   field: {
//     display: "block"
//   },
//   addButton: {
//     backgroundColor: "green",
//     color: "#fff"
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   fileInput: {
//     display: "none"
//   },
//   textArea: {
//     resize: "none",
//     width: "100%",
//     borderRadius: "5px",
//     border: "0.1em solid gray",
//     minHeight: "50px"
//   },
//   uploadBtn: {
//     backgroundColor: "green",
//     color: '#fff'
//   },
// }));

// const AddProduct = () => {
//   const classes = useStyles();

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);
//   return (
//     <Card elevation={3} className={classes.card}>
//       <CardHeader
//         className={classes.cardHeader}
//         title="Add a New Product"
//       ></CardHeader>
//       <CardContent>
//         <form className={classes.root} noValidate autoComplete="off">
//           <FormControl
//             fullWidth
//             variant="outlined"
//             className={classes.formControl}
//           >
//             <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//               Category
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-outlined-label"
//               id="demo-simple-select-outlined"
//               //   value={age}
//               //   onChange={handleChange}
//               labelWidth={labelWidth}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl
//             fullWidth
//             variant="outlined"
//             className={classes.formControl}
//           >
//             <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//               Type
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-outlined-label"
//               id="demo-simple-select-outlined"
//               //   value={age}
//               //   onChange={handleChange}
//               labelWidth={labelWidth}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl
//             fullWidth
//             variant="outlined"
//             className={classes.formControl}
//           >
//             <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//               Gender
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-outlined-label"
//               id="demo-simple-select-outlined"
//               //   value={age}
//               //   onChange={handleChange}
//               labelWidth={labelWidth}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl
//             fullWidth
//             variant="outlined"
//             className={classes.formControl}
//           >
//             <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//               Color
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-outlined-label"
//               id="demo-simple-select-outlined"
//               //   value={age}
//               //   onChange={handleChange}
//               labelWidth={labelWidth}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>

//           <TextField
//             fullWidth
//             className={classes.field}
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//           />

//           <TextareaAutosize
//             className={classes.textArea}
//             aria-label="minimum height"
//             rowsMin={3}
//             placeholder="Description..."
//           ></TextareaAutosize>

//           <TextField
//             fullWidth
//             className={classes.field}
//             id="outlined-basic"
//             label="Price"
//             variant="outlined"
//           />

//           <TextField
//             fullWidth
//             className={classes.field}
//             id="outlined-basic"
//             label="Stock"
//             variant="outlined"
//           />
//           <input
//             accept="image/*"
//             className={classes.fileInput}
//             id="contained-button-file"
//             multiple
//             type="file"
//           />
//           <label htmlFor="contained-button-file">
//             <Button variant="contained" className={classes.uploadBtn} component="span">
//               Upload files <PhotoCamera></PhotoCamera>
//             </Button>
//           </label>
//         </form>
//       </CardContent>
//       <CardActions>
//         <Button
//           fullWidth
//           size="large"
//           variant="contained"
//           className={classes.addButton}
//         >
//           Add
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default AddProduct;

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
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

export default function AddProduct() {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");
  const [userRole, setRole] = React.useState("");
  const [productType, setProductType] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const roleLabel = React.useRef(null);
  const [roleLabelWidth, setRoleLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setRoleLabelWidth(roleLabel.current.offsetWidth);
  }, []);

  const typeLabel = React.useRef(null);
  const [typeLabelWidth, setTypeLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setTypeLabelWidth(typeLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setGender(event.target.value);
  };

  const handleRoleChange = event => {
    setRole(event.target.value);
  };

  const handleTypeChange = event => {
    setProductType(event.target.value);
  };

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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Color
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={gender}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
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
              <TextareaAutosize
                className={classes.textArea}
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Description..."
              ></TextareaAutosize>
            </Grid>
            <Grid item xs={12}>
              <TextField
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
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <input
              accept="image/*"
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
            type="submit"
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
