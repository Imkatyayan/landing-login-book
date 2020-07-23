import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import s from'./navBar.css';
import MouseOverPopover from './popover'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
		paadding:10,
        color:'black'
    },
    menuOptn:{
    border: 0,
    color: 'black',
    height: 40,
    padding: '5px 10px',
    margin:'0 5px',
    fontWeight:'400'
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const st= useStyles(s);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            {/* <FormGroup>
        //         <FormControlLabel
        //             control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
        //             label={auth ? 'Logout' : 'Login'}
        //         /> */}
            {/* </FormGroup> */}
            <AppBar position="static" elevation={0} width={"110%"} style={{ backgroundColor: "transparent", margin: '0px -11px',position:"absolute"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                       
                    </IconButton>
                    <Typography variant="h6" className={classes.title} style={{marginLeft:'20px',color:'black'}}>
                    AGRO ACADEMICS
                    </Typography>
                    <MouseOverPopover />
                    <Button className={classes.menuOptn}style={{ width: "10%"}}>Magazines</Button>
                    <Button className={classes.menuOptn}style={{ width: "10%"}}>News</Button>
                    <Button className={classes.menuOptn}style={{  width: "10%"}}>Downloads</Button>
                    <Button className={classes.menuOptn}style={{  width: "20%"}}>E-Catalogues</Button>
		
                   

					<form action="http://localhost:3000/login">
         <button type="submit" style={{backgroundColor: "#dfdfdf", borderRadius: "10px", cursor:"pointer",fontSize: "18px", height: "40px", width: "85%", align: "center", marginLeft: '10px',marginRight:'50px',color:'black',fontWeight:'400', outline:"none", border:"none"}}>Login </button>
      </form>
                    {/* {auth && (
                        <divLeft
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="blue"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )} */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
