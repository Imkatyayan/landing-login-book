import React from 'react'
import MenuAppBar from '../../components/navbar'
import useStyles from 'isomorphic-style-loader/useStyles'
import s from './bookInfo.css'
export default function Home({ news }) {
    useStyles(s);
    return (
        <div>
            <div className={s.root}>
                <MenuAppBar/>
                <div>
                Book Name
                Home/ agriculture/sub-catergory/final
                </div>
            </div>
        </div>
    )
}