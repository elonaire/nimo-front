import React, { useState } from "react";
import MatTable from "../components/mat-table/MatTable";
import AddUser from "../components/add-user/AddUser";
import Grid from "@material-ui/core/Grid";
import { createColumns } from "../components/CreateColumns";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

let tableData;
const fetchUsers = async () => {
  let url;

  if (process.env.NODE_ENV === "development") {
    url = process.env.REACT_APP_DEV_REMOTE;
  } else if (process.env.NODE_ENV === "production") {
    url = process.env.REACT_APP_PRODUCTION;
  }

  let users = await Axios({
    method: "get",
    url: `${url + '/users'}`,
  });

  let rows = [];

  for (let i = 0; i < users.data.length; i++) {
    let { first_name, last_name, user_role, createdAt } = users.data[i];

    let row = {
      firstName: first_name,
      lastName: last_name,
      role: user_role,
      lastLogin: createdAt,
      dateOfRegistration: createdAt,
    };

    rows.push(row);
  }
  console.log("rows", rows);

  tableData = rows;
};
fetchUsers();

const ManageUsers = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(tableData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    fetchUsers();
    setData(tableData);
  });

  const columnNames = [
    "First Name",
    "Last Name",
    "Role",
    "Last Login",
    "Date of Registration",
  ];
  // const columnObject = {
  //   title: null,
  //   field: null
  // }

  let columns = [];

  columns = createColumns(columnNames);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Users List" />
          <Tab label="Add a new User" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <MatTable data={data} columns={columns} title="Users" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddUser />
        </TabPanel>
      </Grid>
      {/* <Grid item xs={12}>
        
      </Grid> */}
    </Grid>
  );
};

export default ManageUsers;
