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
import SimpleBreadcrumbs from '../../components/breadcrums'
import SpacingGrid from '../../components/gridslide'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import loginImg from "./cover-book0.jpg";
import AgroImg from "./book2.svg";
const UseStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
	    
	    <SearchBar/>
	   <br/>
	  <br/>
	 
       <Paper className={s.paper} >
        <Grid container spacing={5}>
          <Grid item>
            <ButtonBase className={s.image}>
              <img src={loginImg} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  The Devils 2 <br /> <br />
                </Typography>
                <Typography variant="body2" gutterBottom>
                 No Of Pages : 272 <br /> <br />
	  			 Publisher : Agrobios (India) <br /> <br />
	  			 Language : English <br /> <br />
                </Typography> 
                <Typography variant="body2" color="textSecondary">
                  ISBN : 9788194377665
	<br />
	  				<br />
	<Button variant="outlined">Add to Cart</Button>  &emsp;
	  			<Button variant="outlined">Wishlist</Button> 
                </Typography>
	  <br />
	  <Typography variant="body2" color="textSecondary">
               
                </Typography>
              </Grid>
              <Grid item>
	 
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                 
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2" >$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
	  <br />
				  <br/>
				  <br />
	<div className={s.container}>
	 <ScrollableTabsButtonAuto/>
	  <br/>
		
    </div>

	  <br/>
      <Card/>
		<br/>
		<Paper className={s.paper} >
        <Grid container spacing={5}>
          <Grid item>
            <ButtonBase className={s.image}>
              <img src={AgroImg} /> <br/>
				
            </ButtonBase>

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Agro Academics <br /> 
                </Typography>
                <Typography variant="body2" gutterBottom>
			<a href="http://agrobiosonline.com/index.php" style={{ cursor: 'pointer', color:'black', textDecoration:'none' }}>	Revised Subscription charges	<br /> <br /> </a>
	  			Online Submission <br /> <br />
	  			Other Products <br /> <br />
				The Devils 2 <br />
                </Typography> 
                <Typography variant="body2" color="textSecondary">
   

                </Typography>
	  <br />
	  <Typography variant="body2" color="textSecondary">
              
                </Typography>
              </Grid>
              <Grid item>
	 
                <Typography variant="body2" >
               
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
             <Typography variant="body2"  > <h1>Latest Updates</h1> 
				<p>Other Products of Agrobios India</p>
			
			<p>Top news about the market and industry</p>
			</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
		<br/>
		  <br/>		
				
	 <Ll/>
		
	  
	  </div>

  )
}


