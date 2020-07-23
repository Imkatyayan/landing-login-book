/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles'
import React from 'react'
import s from './Book.css'
import MenuAppBar from '../../components/navbar'
import SearchBar from '../../components/searchbar'
import Ll from '../../components/list1' 
import Card from '../../components/tabs'
import Carasul from '../../components/carousel'
import ScrollableTabsButtonAuto from '../../components/switchtab'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import loginImg from "./cover-book0.jpg";

const UseStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
	 
    padding: theme.spacing(5),
    margin: 'auto',
	  maxHeight: 'auto',
    maxWidth:500,
	 
  },
  image: {
    width: 'auto',
    height: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Book ({ title }) {
	const classes = UseStyless();
  useStyles(s)
  return (
	      
    <div className={s.rot}>
	    <MenuAppBar/>
	    
	     <SearchBar />
       <Paper className={classes.paper} style={{marginTop:"50px"}}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img src={loginImg} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  The Devils 2
                </Typography>
                <Typography variant="body2" gutterBottom>
                 No Of Pages : 272 <br />
	  			 Publisher : Agrobios (India) <br />
	  			 Language : English
                </Typography> 
                <Typography variant="body2" color="textSecondary">
                  ISBN : 9788194377665
                </Typography>
	  <br />
	  <Typography variant="body2" color="textSecondary">
                  <input
                className={s.input}
                id="quant"
                type="number"
	   placeholder="Quantity"
                name="quantity"
              />
                </Typography>
              </Grid>
              <Grid item>
	 
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove <br />
	  				<br />
	  			<Button variant="outlined">Add to Cart</Button>  &emsp;
	  			<Button variant="outlined">Wishlist</Button> 
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
	  <br />
	<div className={s.container}>
	 <ScrollableTabsButtonAuto/>
	  <br/>
    </div>
	  <br/>
		   
		<br/>
	 <Ll/>
	  </div>
  )
}


