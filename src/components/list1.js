import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    demo: {
        backgroundColor: "#f4f3f3",
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function InteractiveList() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ backgroundColor: "#f4f3f3" }}>
           
            <Grid container spacing={2}>
                <Grid md={1}>

                </Grid>
                <Grid md={10}>
                    <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" className={classes.title}>
                        Information
          </Typography>
                    <div className={classes.demo}>
                        <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Cotact Us"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="About Us"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Invitation to Authors"
                                    />
                                </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Copyright and Trademark"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Writing A Book"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Publishing Process"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Privacy Policy"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Pricing Information"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Accuracy Of Content"
                                />
                            </ListItem>
                        </List>
                    </div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6" className={classes.title}>
                        CUSTOMER SERVICE
          </Typography>
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Delivery Information"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Shipping Rates"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Cancellation"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Returns"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Disclaimer of Warranty"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Limitation of Liability"
                                />
                            </ListItem>
                            
                        </List>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" className={classes.title}>
                        About Agrobios Online
          </Typography>
Throughout the world, we provide scientific and professional communities with superior specialist information – produced by authors and colleagues across the world.

We are committed to quality production, thought provoking contents and highest standard of ethical behavior, besides courteous and highly personalized services.
            <Typography variant="h6" className={classes.title}>
                        Disclaimer
          </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid md={1}>
        </Grid>
        </Grid>
        </div>
    );
}