import React from 'react';
import Grid from '@material-ui/core/Grid';
import Stats from '../components/stats/Stats';
import MatTable from '../components/mat-table/MatTable';
import { makeStyles } from "@material-ui/core/styles";
// import WorldMap from '../components/map/Map';
import { createColumns } from "../components/CreateColumns"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
}));


const AdminPanel = () => {
    const classes = useStyles();

    const columnNames = ['Product ID', 'Stock', 'Pieces sold', 'pending Orders', 'Price']
    const columnObject = {
        title: null,
        field: null
    }

    let columns = []
    const data = []

    columns = createColumns(columnNames, columnObject, columns);

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={1}
            >
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Stats
                        name="Orders"
                    />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Stats
                        name="Users"
                    />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Stats
                        name="Sales"
                    />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <Stats
                        name="Profits"
                    />
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={12}
                    xl={9}
                    xs={12}
                >
                    <MatTable
                        title="Pending Orders"
                        data={data}
                        columns={columns}
                    />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={6}
                    xl={3}
                    xs={12}
                >
                    {/* <WorldMap /> */}
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={6}
                    xl={3}
                    xs={12}
                >
                    {/* <MatTable /> */}
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={12}
                    xl={9}
                    xs={12}
                >
                    <MatTable
                        title="Sales"
                        data={data}
                        columns={columns}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default AdminPanel;