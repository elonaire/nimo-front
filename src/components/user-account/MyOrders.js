import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createColumns } from "../../components/CreateColumns";
import { Orders } from "../../components/utils/ApiCalls";
import MatTable from "../../components/mat-table/MatTable";

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

const MyOrders = () => {
  const columnNames = ["Order ID", "Date", "Quantity", "Product", "Status"];
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [ordersIsLoading, setOrdersIsLoading] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const OrdersAPI = new Orders(process.env.NODE_ENV);

  useEffect(() => {
    OrdersAPI.fetchOrdersAdmin(setData, setOrdersIsLoading);
  }, []);

  let columns = [];

  columns = createColumns(columnNames);

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
            <Tab label="Cart" />
            <Tab label="Pending Dispatch" />
            <Tab label="In Transit" />
            <Tab label="Pending Review" />
            <Tab label="Completed" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <MatTable data={data} columns={columns} title="Cart" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MatTable data={data} columns={columns} title="Pending Dispatch" />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MatTable data={data} columns={columns} title="In Transit" />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <MatTable data={data} columns={columns} title="Pending Review" />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <MatTable data={data} columns={columns} title="Completed" />
          </TabPanel>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MyOrders;
