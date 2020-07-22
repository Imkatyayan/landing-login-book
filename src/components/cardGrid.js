import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Book from "./card"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} width="100%" overrflow="hidden  !important">
            <Grid container spacing={12} >
                <Grid item xs={2}>
                    <Paper className={classes.paper} elevation={0}> <Book/> </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} elevation={0}><Book /></Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} elevation={0}><Book /></Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} elevation={0}><Book /></Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} elevation={0}><Book /></Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper} elevation={0}><Book /></Paper>
                </Grid>

            </Grid>
        </div>
    );
}