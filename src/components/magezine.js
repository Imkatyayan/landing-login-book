import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CenteredGrid from './AgriScience'

const useStyles = makeStyles((theme) => ({
    popover: {
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function MouseOverPopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
            >
                Agricultural Sciences
      </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,

                }}
                open={open}
                anchorEl={anchorEl}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 190, left: 0 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: '0',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                width="100%"
            >
                <Typography><CenteredGrid /></Typography>
            </Popover>
        </div>
    );
}