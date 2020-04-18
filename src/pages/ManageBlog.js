import React, { useState, useRef, useEffect } from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createColumns } from "../components/CreateColumns";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import AddPost from '../components/blog/AddPost';
import Axios from 'axios';
import * as moment from 'moment';

const useStyles = makeStyles((theme) => ({
  
}));

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
const fetchPosts = async () => {
  let url;

  if (process.env.NODE_ENV === "development") {
    url = process.env.REACT_APP_DEV_REMOTE;
  } else if (process.env.NODE_ENV === "production") {
    url = process.env.REACT_APP_PRODUCTION;
  }

  let users = await Axios({
    method: "get",
    url: `${url + '/blog'}`,
  });

  let rows = [];

  for (let i = 0; i < users.data.length; i++) {
    let { title, author, createdAt } = users.data[i];

    let row = {
      title,
      author,
      link: `${url + '/blog'}`,
      date: moment(createdAt).format('LLLL'),
      numberOfComments: 0,
    };

    rows.push(row);
  }
  console.log("rows", rows);

  tableData = rows;
};
fetchPosts();

const ManageBlog = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [data, setData] = useState(tableData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchPosts();
      setData(tableData);
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  const columnNames = ["Title", "Author", "Date", "Number of comments", "Link"];

  let columns = createColumns(columnNames);

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
          <Tab label="Blog Post List" />
          <Tab label="Add a new Blog Post" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <MatTable data={data} columns={columns} title="Blog Posts" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddPost />
        </TabPanel>
      </Grid>
      {/* <Grid item xs={12}>
        
      </Grid> */}
    </Grid>
  );
};

export default ManageBlog;
