import { Grid } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { AppBar, Typography } from '@material-ui/core';
import React from 'react';

const MiddleBar = () => {
    return (
        <>
        <AppBar position="static" style={{padding: '15px 0'}}>
            <Grid container>
                <Grid md={4}>

                </Grid>
                <Grid md={5} xs={6}>
                <Typography>Weekly Timesheet Company View</Typography>
                </Grid>
                <Grid md={3} xs={6}>
                <Typography align="center">Saturday, July 24, 2021 2:57 PM</Typography>
                </Grid>
            </Grid>
        </AppBar>
        <AppBar position="static" color="default" style={{boxShadow:'0px 10px grey'}}>
            <Toolbar>
                <Typography>Weekly Timesheet Company View</Typography>
                <Typography style={{marginLeft:'2%',padding:'17px 0',borderBottom: '3px solid #e02b4f'}}>Weekly Timesheet Manager View</Typography>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default MiddleBar;