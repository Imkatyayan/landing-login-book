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
import s from './Login.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import loginImg from "./avatar.svg";

export default function Login ({ title }) {
  useStyles(s)
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	
  return (
    <div className={s.root}>
      <div className={s.container}>
	   <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Login  &emsp;" />
	
        <Tab label=" &nbsp; &nbsp; Institutional Login" />
      </Tabs>
	   
            <img src={loginImg} />
          
       
    
   
        <form method="post">
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              Username or email address:
              <input
                className={s.input}
                id="usernameOrEmail"
                type="text"
	  placeholder="Username"
                name="usernameOrEmail"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
            </label>
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password:
              <input
                className={s.input}
                id="password"
                type="password"
	   placeholder="Password"
                name="password"
              />
            </label>
          </div>
	  <div className={s.formGroup}>
         <a href="#">Forgot Passowrd ? </a> &emsp; &emsp; &nbsp; &nbsp; &nbsp; 
	<a href="#">New User? Create Account</a> 
          </div>
          <div className={s.formGroup}>
            <button className={s.button} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  title: PropTypes.string.isRequired
}
