import React from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from '@material-ui/core/Grid';

const ManageOrders = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MatTable title="Orders" />
      </Grid>
    </Grid>
  );
};

export default ManageOrders;
