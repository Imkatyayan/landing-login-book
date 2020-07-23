import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Book from "./card"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useStyles from 'isomorphic-style-loader/useStyles'
import s from './cardGrid.css'

const usestyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function CenteredGrid() {
    useStyles(s)
    const classes = usestyles();
    const [index, setIndex] = React.useState(5);
    const [indexF, setIndexF] = React.useState(-1);
    let scroller = React.useRef(null);
    const handleChangeNext = (event) => {
        setIndex(index + 1);
        setIndexF(indexF + 1);
        console.log(index);
        console.log(indexF);
        scroller.childNodes[index].childNodes[0].scrollIntoView({
            behavior: 'smooth',
        });
    };
    const handleChangePrev = (event) => {
            if(indexF>=0){
                scroller.childNodes[indexF].childNodes[0].scrollIntoView({
                    behavior: 'smooth',
                });
                setIndex(index - 1);
                setIndexF(indexF - 1);
            }

    };
    return (
        <div className={s.scrollbar} width="100%" >
                <Button className={s.moveRight}  onClick={handleChangeNext}>
                {">"}
                </Button>
                <Button className={s.moveLeft} onClick={handleChangePrev}>
                {"<"}
                </Button>


            <Box display="flex" flexDirection="row" m={1} className={s.noScroll} ref={(el) => { scroller = el; }} >
                <Box>
                    <Paper className={classes.paper}  elevation={0}> <Book/> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0} > <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
                <Box>
                    <Paper className={classes.paper} elevation={0}> <Book /> </Paper>
                </Box>
            </Box>
        </div>
    );
}