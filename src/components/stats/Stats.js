import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import LineChart from '../line-chart/LineChart';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        }
    },
    paper: {
        backgroundColor: '#323741',
        color: '#A1A8B8',
        boxShadow: '1px 1px 5px #A1A8B8'
    },
    statSection: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px'
    }
}));

export default function Stats(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <div className={classes.statSection}>
                            <Typography variant="h5" noWrap>
                                {props.name}
                            </Typography>
                            <Typography variant="h6" noWrap>
                                203
                            </Typography>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                    >
                        <div className={classes.statSection}>
                            <LineChart />
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
