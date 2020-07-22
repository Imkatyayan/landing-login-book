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
        padding: theme.spacing(4,10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} width="100%" overflow="hidden  !important">
            <Grid container spacing={5} >
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}><Mag/></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Environmental Sciences</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Hindi Books</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Home Science</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Life Science</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Textbook</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={0}>Veterinary and Animal Science</Paper>
                </Grid>

            </Grid>
        </div>
    );
}