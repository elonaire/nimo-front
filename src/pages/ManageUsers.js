import React, { useState, Fragment } from "react";
import MatTable from "../components/mat-table/MatTable";
import AddUser from "../components/add-user/AddUser";
import Grid from "@material-ui/core/Grid";
import { createColumns } from "../components/CreateColumns";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import CircularIndeterminate from "../components/feedback/Circular";
import { User } from "../components/utils/ApiCalls";

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

const ManageUsers = () => {
  const userAPI = new User(process.env.NODE_ENV);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [usersIsLoading, setUsersIsLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    userAPI.fetchUsers(setData, setUsersIsLoading);
  }, []);

  const columnNames = [
    "First Name",
    "Last Name",
    "Role",
    "Last Login",
    "Date of Registration",
  ];

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
          {usersIsLoading && (
            <Fragment>
              <CircularIndeterminate />
            </Fragment>
          )}
          {!usersIsLoading && (
            <MatTable data={data} columns={columns} title="Users" />
          )}
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
