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
import PropTypes from 'prop-types'
import s from './forget.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import loginImg from "./avatar.svg";
import TextField from '@material-ui/core/TextField';

export default function Forget ({ title }) {
  useStyles(s)
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	
  return (
    <div className={s.root}>
      <div className={s.container}>
	   
	    <h1>&emsp;&emsp;{title}</h1>
        <p className={s.lead}>
         Please enter your email address to request a password reset.
        </p>
          
          
       
    
   
        <form method="post">
          <div className={s.formGroup}>
            
              <input
                className={s.input}
                id="usernameOrEmail"
                type="text"
	  placeholder="Enter Your Email"
                name="usernameOrEmail"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
           
          </div>
       
	<br />
          <div className={s.formGroup}>
            <button className={s.button} type="submit">
	  		Reset Password
            </button>
          </div>
	   <div className={s.formGroup}>
        <a href="http://localhost:3000/login"> &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &nbsp; &nbsp;  Back to  Login  </a> 

          </div>
        </form>
      </div>
    </div>
  )
}

Forget.propTypes = {
  title: PropTypes.string.isRequired
}
