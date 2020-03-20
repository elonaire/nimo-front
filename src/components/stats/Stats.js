import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import LineChart from '../line-chart/LineChart';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
        boxShadow: '1px 1px 5px #A1A8B8',
    },
    statSection: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        overflow: 'hidden'
    },
    drop: {
        color: 'red',
        fontSize: '35px'
    },
    rise: {
        color: 'green',
        fontSize: '35px',
        display: 'block'
    },
    summary: {
        display: 'flex',
        flexDirection: 'row',
    },
    percentage: {
        fontSize: '27px',
        color: 'green',
        display: 'block'
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
                            <div className={classes.summary}>
                                <ArrowUpwardIcon className={classes.rise} />
                                {/* <ArrowDownwardIcon className={classes.drop} /> */}
                                <span className={classes.percentage}>20%</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
