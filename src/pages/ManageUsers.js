import React from "react";
import MatTable from "../components/mat-table/MatTable";
import AddUser from '../components/add-user/AddUser';
import Grid from '@material-ui/core/Grid';
import { createColumns } from "../components/CreateColumns"

const ManageUsers = () => {
  const columnNames = ['First Name', 'Last Name', 'Role', 'Last Login', 'Date of Registration']
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
          title="Users"
        />
      </Grid>
      <Grid item xs={12}>
        <AddUser />
      </Grid>
    </Grid>
  );
};

export default ManageUsers;
