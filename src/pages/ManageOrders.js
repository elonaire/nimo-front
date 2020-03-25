import React from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from '@material-ui/core/Grid';
import { createColumns } from "../components/CreateColumns"

export default function ManageOrders() {
  const columnNames = ['Order ID', 'Date', 'Quantity', 'Product', 'Status']
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
          title="Orders"
        />
      </Grid>
    </Grid>
  );
};
