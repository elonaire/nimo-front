import React from 'react';
import Grid from '@material-ui/core/Grid';
import Stats from '../components/stats/Stats';
import MatTable from '../components/mat-table/MatTable';
import { makeStyles } from "@material-ui/core/styles";
// import WorldMap from '../components/map/Map';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
}));


const AdminPanel = () => {
    const classes = useStyles();

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
                    <MatTable />
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
                    {/* <LatestProducts /> */}
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={12}
                    xl={9}
                    xs={12}
                >
                    {/* <LatestOrders /> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default AdminPanel;