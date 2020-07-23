import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Pics from './cardGrid';
import useStyles from 'isomorphic-style-loader/useStyles';
import s from './tabs.css';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const usestyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width:500
    },
}));
const theme = createMuiTheme({
        Muitabs:{
        indicator: {
            backgroundColor: "#ffffff",
        },
            root: {
                "&:hover": {
                    backgroundColor: "pink",
                }
            },
            selected: {
                backgroundColor: "#ffffff",
                "&:hover": {
                    backgroundColor: "#000000",
                }
            }
        }
});
export default function SimpleTabs() {
    const classes = usestyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    let triangle=React.useRef(null);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    useStyles(s);

    return (
        <ThemeProvider theme={theme}>
            <div className={s.triangular} ref={(el) => { triangle = el; }}></div>
        <div className={classes.root} style={{ width: "90%", marginLeft: "5%",paading:"0%",marginBottom:"10px",marginTop:"57px"}}>
            <AppBar position="static" style={{ backgroundColor: "transparent", marginLeft: "38%",width:"60%"}} elevation={0}>
                    <Tabs value={value} onChange={handleChange} indicatorColor="red"
                        textColor="primary"
                        aria-label="full width tabs example">
                    <Tab label="New Arrivals" className={s.tab} {...a11yProps(0)} />
                        <Tab label="Featured" className={s.tab}  {...a11yProps(1)} />
                    <Tab label="ForthComing" className={s.tab} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction} >
                <Pics/>
      </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Pics />
      </TabPanel>
            <TabPanel value={value} index={2}dir={theme.direction} dir={theme.direction}>
                        <Pics />
      </TabPanel>
      </SwipeableViews>
        </div>
    </ThemeProvider>
    );
}

