import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import { HomeCard } from './HomeCard';

export const HomePage = () => {
  return (
    <Box sx={{ my: 4, mx: 16 }}>
        
        <Grid container spacing={5}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Paper elevation={5} sx={{ px: 5, py: 3}}>
                <Typography variant='h6'>Dan Meleras | Data Scientist & Web Developer.</Typography>
                <Typography variant='body1'>Welcome to my Datablog.</Typography>
                <Typography variant='body1'>
                    This website is currently a work-in-progress. All of the 'posts' that are currently below are mostly test runs and rough drafts 
                    to help me figure out how to build the infrastructure and show interesting visualizations and information. 
                </Typography>
                <Typography variant='body1'>
                    See the about page to the left for more info.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={6}>
                <HomeCard imgLink={"/static/cards/measure.jpg"} 
                    title='Analytics' 
                    desc="Datablog, Visualizations, etc"
                    disableCard={false}
                    link='/analytics'
                />
            </Grid>

            <Grid item xs={6}>
                <HomeCard imgLink={"/static/cards/notebook.jpg"} 
                    title='Blog' 
                    desc="Stuff I've Learned"
                    disableCard={false}
                    link='/blog'
                />
            </Grid>

        </Grid>
    </Box>
  );
}