import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CenteredGrid from './grid'
import s from './popover.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    menuOptn: {
        border: 0,
        background:'transparent',
        borderRadius: 3,
        color: 'black',
        height: 40,
        paddingRight: '0 2px',
        marginRight: '2px',
        marginLeft:'20px',
        boxShadow: "none",
        fontWeight: '400'
    },
}));

export default function SimplePopover() {
    const classes = useStyles();
    const st=useStyles(s);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} className={classes.menuOptn} variant="contained" onClick={handleClick} elevation={0}>
                Book Catalogue {!open && <ExpandMoreIcon/>}{open && <ExpandLessIcon /> } 
      </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 65, left: 150}}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: '0',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                elevation={1}
                boxShadow='none'
            >
                <CenteredGrid />
            </Popover>
        </div>
    );
}






