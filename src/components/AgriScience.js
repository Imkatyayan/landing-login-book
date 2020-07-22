import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Mag from "./magezine"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4, 10),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} width="100%" overrflow="hidden  !important">
            <Grid container spacing={5} >
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>5th Dean Science Committe</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>5th Dean As Per Committe</Paper>
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
                    <Paper className={classes.paper} elevation={0}>Agrometerology, Remote Sensing and Gis</Paper>
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