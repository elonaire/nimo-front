import React from "react";
import MatTable from "../components/mat-table/MatTable";
import AddUser from '../components/add-user/AddUser';
import Grid from '@material-ui/core/Grid';

const ManageUsers = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MatTable title="Users" />
      </Grid>
      <Grid item xs={12}>
        <AddUser />
      </Grid>
    </Grid>
  );
};

export default ManageUsers;
