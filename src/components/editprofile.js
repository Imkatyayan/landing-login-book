import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserImg from "./avatar.svg";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
	   textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
   
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
   <div className={classes.root}>
	   
	   <img src={UserImg} style={{height:'150px', width:'150px', padding:'10px'}}/>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
    	<TextField
        id="outlined-secondary"
        label="First Name"
        variant="outlined"
        color="primary"
	   fullWidth
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        id="outlined-secondary"
        label="Last Name"
        variant="outlined"
        color="primary"
	  fullWidth
      />
        </Grid>
	  <Grid item xs={12} sm={6}>
 		<TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        color="primary"
	    fullWidth
      />
        </Grid>
	    <Grid item xs={12} sm={6}>
 		<TextField
        id="outlined-secondary"
        label="Phone Number"
	  type="number"
        variant="outlined"
        color="primary"
	    fullWidth
      />
        </Grid>
        <Grid item xs={6} sm={3}>
        <TextField
        id="outlined-secondary"
        label="House No"
        variant="outlined"
        color="primary"
	   fullWidth
      />
        </Grid>
        <Grid item xs={6} sm={3}>
         <TextField
        id="outlined-secondary"
        label="Street/Lane"
        variant="outlined"
        color="primary"
	  fullWidth
      />
        </Grid>
        <Grid item xs={6} sm={3}>
         <TextField
        id="outlined-secondary"
        label="Locality"
        variant="outlined"
        color="primary"
	    fullWidth
      />
        </Grid>
        <Grid item xs={6} sm={3}>
         <TextField
        id="outlined-secondary"
        label="Landmark"
        variant="outlined"
        color="primary"
	   fullWidth
      />
        </Grid>
	   
        <Grid item xs={6} sm={4}>
        <TextField
        id="outlined-secondary"
        label="Postal Code"
	  type="number"
        variant="outlined"
        color="primary"
	   fullWidth
      />
        </Grid>
        <Grid item xs={6} sm={4}>
         <TextField
        id="outlined-secondary"
        label="City"
        variant="outlined"
        color="primary"
	  fullWidth
      />
        </Grid>
        <Grid item xs={6} sm={4}>
         <TextField
        id="outlined-secondary"
        label="Country"
        variant="outlined"
        color="primary"
	    fullWidth
      />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="primary"  size="large">
        Save & continue
      </Button>
        </Grid>
      </Grid>
    </div>
  )
}
