import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './card.css';

const usestyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
   useStyles(s);
    return (
        <Card className={s.cardback} >
            <CardActionArea>
                < img src="http://agrobiosonline.com/books_coverpages/06260908_685.jpg"
                    alt="pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                       Elementary Botony
                    </Typography>
                    <Typography color="textSecondary">
                        <p>
                        Elementary Botony
                        </p>
                        <p>
                        MRP:345
                        </p>
                        <p>
                           Authored By:Person1
                        </p>
                        <p>
                            Released In: 2020
                        </p>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}




