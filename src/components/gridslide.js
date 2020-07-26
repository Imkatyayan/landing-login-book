import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  roott: {
    flexGrow: 1,
  },
  paperr: {
	  backgroundColor:'#a1cffd',
	  boxShadow:' 0 5px 20px .17px rgba(0,0,0,0.4)',
    height: 350,
    width: 250,
	  borderRadius:'20px',
	  backgroundImage:"cover-book0.jpg",
	 zIndex:'1',
  },
  controll: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.roott} spacing={5}>
      <Grid item xs={12}>
	  
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2,3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paperr} />
	  			<h1>zyz</h1>
            </Grid>
          ))}

        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.controll}>
          <Grid container>
            <Grid item>
              <FormLabel>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  Agro Academics </FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
               
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
