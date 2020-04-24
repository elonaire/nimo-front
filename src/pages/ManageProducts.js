import React, { useState, useEffect, Fragment } from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";
import AddProduct from "../components/add-product/AddProduct";
import { createColumns } from "../components/CreateColumns";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddCategory from "../components/add-product/AddCategory";
import CircularIndeterminate from "../components/feedback/Circular";
import { Product } from "../components/utils/ApiCalls";

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

const ManageProducts = () => {
  const productsAPI = new Product(process.env.NODE_ENV);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    productsAPI.fetchProducts(setProductsIsLoading, setData);
  }, []);

  const columnNames = [
    "Name",
    "Stock",
    "Pieces sold",
    "pending Orders",
    "Price",
  ];

  let columns = [];

  columns = createColumns(columnNames);
  console.log("prod cols", columns);

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
          <Tab label="Products List" />
          <Tab label="Add a new Product" />
          <Tab label="Add a new Category" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {productsIsLoading && (
            <Fragment>
              <CircularIndeterminate />
            </Fragment>
          )}
          {!productsIsLoading && (
            <MatTable data={data} columns={columns} title="Products" />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddProduct />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddCategory />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default ManageProducts;
