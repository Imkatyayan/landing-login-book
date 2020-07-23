import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Mag from "./magezine";
import s from './popover.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0, 12),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginY: theme.spacing(0),
    },

}));

export default function CenteredGrid() {
    const classes = useStyles();
    const st = useStyles(s);

    return (
        <div className={classes.root} style={{ overflow: 'hidden' }}>
            <Grid container spacing={5} >
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>5th Dean Science Committe</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Agribusiness</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Agricultural Chemistry</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Agricultural Waste and Management</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Agroforestry</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Agronomy</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Biochemistry</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>More</Paper>
                </Grid>

            </Grid>
        </div>
    );
}
