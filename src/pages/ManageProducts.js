import React from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from '@material-ui/core/Grid';
import AddProduct from '../components/add-product/AddProduct'
import { createColumns } from "../components/CreateColumns"

const ManageProducts = () => {
  const columnNames = ['Product ID', 'Stock', 'Pieces sold', 'pending Orders', 'Price']
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
          title="Products"
        />
      </Grid>
      <Grid item xs={12}>
        <AddProduct />
      </Grid>
    </Grid>
  );
};

export default ManageProducts;
