import React from 'react';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(8),
            width: '60%',
            marginLeft: '20%',
            align: 'center',
            fontSize: '50px',
            position: 'relative',
        },
       
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '86px',
        left: '410px',
    },
    
}));

export default function SearchBar() {
    const classes = useStyles();
    
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search For Books" variant="outlined" />
                <div className={classes.searchIcon}>
                <SearchIcon style={{ fontSize: 35 }}/>
            </div>
        </form>
    );
}