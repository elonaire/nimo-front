import React from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from '@material-ui/core/Grid';
import AddProduct from '../components/add-product/AddProduct'

const ManageProducts = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MatTable title="Products" />
      </Grid>
      <Grid item xs={12}>
        <AddProduct />
      </Grid>
    </Grid>
  );
};

export default ManageProducts;
