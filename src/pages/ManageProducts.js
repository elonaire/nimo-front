import React, { useState, useEffect } from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";
import AddProduct from "../components/add-product/AddProduct";
import { createColumns } from "../components/CreateColumns";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Axios from "axios";

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
const fetchProducts = async () => {
  let products = await Axios({
    method: "get",
    url: "http://192.168.214.206:3000/products",
  });

  let rows = [];

  for (let i = 0; i < products.data.length; i++) {
    let { name, stock, price } = products.data[i];

    let row = {
      name,
      stock,
      price,
      piecesSold: 0,
      pendingOrders: 0,
    };

    rows.push(row);
  }
  console.log("rows", rows);

  tableData = rows;
};
fetchProducts();

const ManageProducts = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(tableData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchProducts();
      setData(tableData);
    }

    return () => {
      isCancelled = true;
    };
  }, [data]);

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
        </Tabs>
        <TabPanel value={value} index={0}>
          <MatTable data={data} columns={columns} title="Products" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddProduct />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default ManageProducts;
