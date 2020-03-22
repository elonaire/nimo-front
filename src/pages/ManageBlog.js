import React from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";

const ManageBlog = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MatTable title="Blog Posts" />
      </Grid>
      {/* <Grid item xs={12}>
        <AddUser />
      </Grid> */}
    </Grid>
  );
};

export default ManageBlog;
