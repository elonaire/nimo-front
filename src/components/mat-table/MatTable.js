import React from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./MatTableIcons";
import Axios from "axios";

export default function MatTable(props) {
  console.log("props", props);

  const [state, setState] = React.useState({
    columns: props.columns,
    data: props.data,
  });

  let url;

  if (process.env.NODE_ENV === "development") {
    url = process.env.REACT_APP_DEV_REMOTE;
  } else if (process.env.NODE_ENV === "production") {
    url = process.env.REACT_APP_PRODUCTION;
  }

  return (
    <MaterialTable
      // style={
      //     {
      //         backgroundColor: '#323741',
      //         color: 'white',
      //     }
      // }
      icons={tableIcons}
      title={props.title}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: undefined,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(async () => {
              if (oldData) {
                let endpoint;
            
                if (props.title.toLowerCase().includes("product")) {
                  endpoint = `/products/edit/${oldData.productId}`;
                } else if (props.title.toLowerCase().includes("order")) {
                  endpoint = `/orders/edit/${props.data.order_id}`;
                } else if (props.title.toLowerCase().includes("user")) {
                  endpoint = `/users/edit/${oldData.userId}`;
                } else if (props.title.toLowerCase().includes("blog")) {
                  endpoint = `/blog/edit/${oldData.postId}`;
                }

                let res = await Axios({
                  method: "patch",
                  url: `${url + endpoint}`,
                  data: newData,
                });

                resolve(res);
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 10000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(async () => {
              resolve();
              let endpoint;

              if (props.title.toLowerCase().includes("product")) {
                endpoint = `/products/delete/${oldData.productId}`;
              } else if (props.title.toLowerCase().includes("order")) {
                endpoint = `/orders/delete/${props.data.order_id}`;
              } else if (props.title.toLowerCase().includes("user")) {
                endpoint = `/users/delete/${oldData.userId}`;
              } else if (props.title.toLowerCase().includes("blog")) {
                endpoint = `/blog/delete/${oldData.postId}`;
              }

              let res = await Axios({
                method: "delete",
                url: `${url + endpoint}`,
              });
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 6000);
          }),
      }}
    />
  );
}
