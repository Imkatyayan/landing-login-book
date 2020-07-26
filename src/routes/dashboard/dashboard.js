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
import s from './dashboard.css'
import MenuAppBar from '../../components/navbarHome'
import SearchBar from '../../components/searchBarHome'
import Card from '../../components/tabs'
import Ll from '../../components/list1'
import Carasul from '../../components/carousel'
import CustomizedTimeline from '../../components/dash'
import SimpleBreadcrumbs from '../../components/breadcrums'
import AgroImg from "./book2.svg";
export default function Home ({ news }) {
  useStyles(s)
  return (
    <div >
      <MenuAppBar  />
      <SearchBar />
      <Carasul/>
	  <br/>
	  <br/>
	  
	 
	  <h1>User Details</h1>
	  <br/>
	  <br/>
	  <CustomizedTimeline />
     <br/>
	  <br/>
      <Ll/>
    </div>
  )
}
