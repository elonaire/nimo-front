import React, { useState, useEffect } from "react";
import MatTable from "../components/mat-table/MatTable";
import Grid from "@material-ui/core/Grid";
import { createColumns } from "../components/CreateColumns";
import Axios from "axios";

let url;

if (process.env.NODE_ENV === "development") {
  url = process.env.REACT_APP_DEV_REMOTE;
} else if (process.env.NODE_ENV === "production") {
  url = process.env.REACT_APP_PRODUCTION;
}

let tableData;
const fetchOrders = async () => {
  let orders = await Axios({
    method: "get",
    url: `${url + "/orders/admin"}`,
  });

  let rows = [];

  for (let i = 0; i < orders.data.length; i++) {
    let { order_id, createdAt, quantity, product_id, status } = orders.data[i];

    let row = {
      orderId: order_id,
      date: createdAt,
      quantity,
      product: product_id,
      status,
    };

    rows.push(row);
  }
  console.log("rows", rows);

  tableData = rows;
};
fetchOrders();

export default function ManageOrders() {
  const columnNames = ["Order ID", "Date", "Quantity", "Product", "Status"];
  const [data, setData] = useState(tableData);

  useEffect(() => {
    fetchOrders();
    setData(tableData);
  }, [data]);

  let columns = [];

  columns = createColumns(columnNames);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MatTable data={data} columns={columns} title="Orders" />
      </Grid>
    </Grid>
  );
}
