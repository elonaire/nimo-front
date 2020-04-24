import React, { useState, useRef, useEffect, Fragment } from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createColumns } from "../components/CreateColumns";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import AddPost from "../components/blog/AddPost";
import { Blog } from "../components/utils/ApiCalls";
import CircularIndeterminate from "../components/feedback/Circular";

const useStyles = makeStyles((theme) => ({}));

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

const ManageBlog = () => {
  const classes = useStyles();
  const blogAPI = new Blog(process.env.NODE_ENV);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [postsIsLoading, setPostsIsLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    blogAPI.fetchBlogPosts(setData, setPostsIsLoading);
  }, []);

  const columnNames = ["Title", "Author", "Date", "Number of comments", "Link"];

  let columns = createColumns(columnNames);

  return (
    <Fragment>
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
            {postsIsLoading && (
              <Fragment>
                <CircularIndeterminate />
              </Fragment>
            )}
            {!postsIsLoading && (
              <MatTable data={data} columns={columns} title="Blog Posts" />
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddPost />
          </TabPanel>
        </Grid>
        {/* <Grid item xs={12}>
        
      </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default ManageBlog;
