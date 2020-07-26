import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ backgroundColor: "transparent", marginLeft: "14%", width: "72%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="&emsp; About Book" {...a11yProps(0)} />
          <Tab label="&emsp; Book Content " {...a11yProps(1)} />
          <Tab label="&emsp; About The Author  " {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       The vegetables pests plague everybody who has ever raised vegetables, from backyard gardener to professional horticulturists, farm managers and agro-business professionals. The economic impacts of vegetable pests are enormous. To manage and minimize the adverse impacts of pests, it is important to identify exactly which pests are affecting vegetable crops. The present book entitled 'Eco-friendly Pest Management Strategies for major vegetable crops' provides comprehensive knowledge on the insect pests of some selected vegetables, identification guides, descriptions of pest life history, damage symptoms, host plant relationships, natural enemies and pest management recommendations. In addition to above, the book also includes the use of lure traps and other eco-friendly management techniques for fruit flies and host plant resistance as a component to organic pest management in vegetable crops along with organic agriculture- myths and realities. Every gardener, horticulturalist, scientists, farmers, decision-makers and politicians who wish to build a safe agriculture should have this book as a complete reference.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Eco-friendly Pest Management Strategies for Major Vegetable Crops
Pests of Brinjal (Eggplant) and their Eco-Friendly Management Techniques
Tamoghna Saha, Hari Krishna, Nithya Chandran, Sharwan Kumar, Sailabala Dei and Archana Kumari
Organic Pest Management Strategies in Tomato
Romila Akoijam, Atanu Seni and Sandip Patra
Insect and Non Insect Pests of Chilli and their Environment Friendly Management
Rachana R. R., RichaVarshney, Romila Akoijam and Jayasimha G. T.
Insect Pests of Okra and their Eco-friendly Management
Atanu Seni, Romila Akoijam and Sandip Patra
Cruciferous Vegetables: Scope of Organic based Pest Management
ShyamBabu Sah
Leguminous Vegetables: Strategies of Eco-friendly Management of Important Insect Pests
Biswajit Patra
Pest Problems and their Eco-friendly Management Techniques in Leafy Vegetables
Gautam Chakraborty and S. Mondal
Pest Problem and their Management Strategies of Tuber and Root Vegetable Crops
Kalmesh Managanvi, Tamoghna Saha and Nithya Chandran
Insect Pests of Moringa and their Ecofriendly Management
Atanu Seni and Jaydeep Halder
Use of Lure Traps and other Eco-friendly Techniques for Organic Pest Management against Fruit Flies
Sheikh Khursheed and Farooz Hassan
Host Plant Resistance as a Component to Organic Pest Management in Vegetable Crops
Rachana R. R., Richa Varshney, Romila Akoijam and Jayasimha G. T.
Organic Agriculture: Myths, Realities and Beyond
Prabuddha Ray and Sarthak Chowdhury
      </TabPanel>
      <TabPanel value={value} index={2}>
       Tamoghna Saha, Ph.D. is serving as Assistant Professor-cum-Junior Scientist, Entomology at Bihar Agricultural University (BAU), Sabour, Bhagalpur, Bihar and having more than seven and half years of experience in teaching (Undergraduate, Post-graduate and Ph. D), research, extension and training. He is the major advisor of five M.Sc. (3 completed) and one Ph. D student and also Co-advisor around twelve students in Post Graduate programme. His research currently covers host plant resistance on vegetable crops, toxicological studies and eco-friendly pest management on vegetable crops. He has released three technologies for management of key insect pests on vegetable crops in his short service carrier. Dr. Saha is presently associated with All India Coordinated Research Project on Vegetable Crops where he is catering a large no of entomological field trials.  He received post graduation in entomology from University Agricultural Sciences, Dharwad and acquired doctorate from Bidhan Chandra Krishi Vishwavidyalaya, Kalyani, Nadia, West Bengal. Dr. Saha has published many research papers, review articles and book chapters in various national and international journals. He is also an active member of editorial board of different national and international journals. Dr. Saha is Life Fellow of Entomological Society of India and Society of Plant Protection Sciences.
      </TabPanel>
      
    </div>
  );
}