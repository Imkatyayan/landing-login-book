import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import s from './grid.css' 
import useStyles from 'isomorphic-style-loader/useStyles'


const usestyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        color: theme.palette.text.secondary,
    },
    
}));

export default function CenteredGrid() {
    const classes = usestyles();
    useStyles(s);

    return (
            <div className={classes.root} >
            <Grid sm container spacing={5,0}>
                        <Grid item xs={3}>
                                <Paper elevation={0} className={s.subListTitle}>
                                        <span>Agricultural Sciences</span>
                                </Paper>
                        <List dense="true" style={{ fontSize: "14px", padding: "0px"}} className={classes.paper}>
                        <ListItem  style={{paddingRight:"0px"}}>
                            5th Deans Committee
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                           5th Deans Committee (As Per)
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                         Agribusiness
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                            Agricultural Chemistry
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                            Agricultural Waste And Management
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                            Agrochemicals
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                            Agroforestry
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                         Agrometeorology, Remote Sensing & Gis
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                            Agronomy
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>
                            Biochemistry
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                                    <Paper className={s.subListTitle} elevation={0}><span>Environmental Sciences </span></Paper>
                        <List dense="true" style={{ fontSize: "14px", padding: "0px" }} className={classes.paper}>
                                        <ListItem style={{ paddingRight: "0px" }}>
                                                    Air Environment
                                        </ListItem>
                                        <ListItem style={{ paddingRight: "0px" }}>
                                                    Disaster Management
                                        </ListItem>
                                        <ListItem style={{paddingRight:"0px"}}>
                                                    Environment Education
                                        </ListItem>
                                        <ListItem style={{paddingRight:"0px"}}>
                                                    Environmental Analysis
                                        </ListItem>
                                        <ListItem style={{paddingRight:"0px"}}>
                                                    Environmental Biotechnology
                                        </ListItem>
                                        <ListItem style={{paddingRight:"0px"}}>
                                                    Global Warming
                                        </ListItem>
                                        <ListItem style={{paddingRight:"0px"}}>
                                                    Microbiology
                                        </ListItem>
                                        <ListItem style={{paddingRight:"0px"}}>
                                                    Natural Resources
                                        </ListItem>
                                    </List>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={s.subListTitle} elevation={0}><span>Life Science</span></Paper>
                        <List dense="true" style={{ fontSize: "14px", padding: "0px" }} className={classes.paper}>
                        <ListItem style={{paddingRight:"0px"}}>

                                Biochemistry"
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Biotechnology"
                      
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Botany"
                       
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Developmental Biolog
                        
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Economic Botany
                    
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Ethnobotany
                    
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Genetics
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Home Science
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Human Health
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Medicinal & AromaticPlants
                        
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                                    <Paper className={s.subListTitle} elevation={0}><span>Veterinary and Animal Science</span></Paper>
                        <List dense="true" style={{ fontSize: "14px", padding: "0px" }} className={classes.paper}>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Behaviour
                         
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Biotechnology
                        
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Breeding
                    
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Diseases
                    
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Ecology
                       
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Husbandry
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Nutrition
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Animal Products
                    
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Beekeeping
                       
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Dairy Science
                      
                        </ListItem>
                    </List>
                </Grid>
                {/* <Grid item xs>
                        <Paper style={{ margin: "0px", paddingBottom: "0px", paddingLeft:"8px" }} className={classes.paper} elevation={0}>Hindi Books</Paper>
                        <List style={{ fontSize: "14px", padding: "0px" }} dense="true" className={classes.paper}>
                        <ListItem style={{paddingRight:"0px"}}>

                                Agricultural Science
                        
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Life Sciences
                      
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Veterinary And Animal Science
                        
                        </ListItem >
                    </List>
                </Grid>
                
                <Grid item xs>
                    <Paper style={{ margin: "0px", paddingBottom: "0px" }} className={classes.paper} elevation={0}>Textbook</Paper>
                    <List dense="true" className={classes.paper}>
                        <ListItem style={{paddingRight:"0px"}}>

                                Agricultural Science
                        
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Environmental Sciences
                        
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Hindi Textbooks
                    
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Life Sciences
                      
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}> 

                                Pharmacy
                     
                        </ListItem>
                        <ListItem style={{paddingRight:"0px"}}>

                                Veterinary And Animal Sciences
                        
                        </ListItem>
                    </List>
                </Grid> */}
                
            </Grid>
        </div>
    );
}