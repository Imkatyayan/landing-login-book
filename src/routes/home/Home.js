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
import s from './Home.css'
import MenuAppBar from '../../components/navbar'
import SearchBar from '../../components/searchbar'
import Card from '../../components/cardGrid'
import Ll from '../../components/list1'
export default function Home ({ news }) {
  useStyles(s)
  return (
    <div>
      <MenuAppBar />
      <SearchBar />
      <Card/>
      <Ll/>
    </div>
  )
}
