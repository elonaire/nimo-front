import React, { useState, useEffect, Fragment } from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";
import {Orders} from "../components/utils/ApiCalls";
import { createColumns } from "../components/CreateColumns";
import CircularIndeterminate from "../components/feedback/Circular";

export default function ManageOrders() {
  const columnNames = ["Order ID", "Date", "Quantity", "Product", "Status"];
  const [data, setData] = useState([]);
  const [ordersIsLoading, setOrdersIsLoading] = useState(false);
  const OrdersAPI = new Orders(process.env.NODE_ENV);

  useEffect(() => {
    OrdersAPI.fetchOrdersAdmin(setData, setOrdersIsLoading);
  }, []);

  let columns = [];

  columns = createColumns(columnNames);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
      {ordersIsLoading && (
            <Fragment>
              <CircularIndeterminate />
            </Fragment>
          )}
          {!ordersIsLoading && (
            <MatTable data={data} columns={columns} title="Orders" />
          )}
      </Grid>
    </Grid>
  );
}
