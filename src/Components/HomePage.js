import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import { HomeCard } from './HomeCard';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const HomePage = () => {
  return (
    <Box sx={{ my: 4, mx: 16 }}>
        
        <Grid container spacing={5}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Paper elevation={5} sx={{ p: 3}}>
                <Typography variant='h6'>Data Scientist & Web Developer.</Typography>
                <Typography variant='body1'>Welcome to my personal Data Analytics Website & Blog.</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard imgLink={"/static/cards/bill.webp"} 
                    title='Household Debt' 
                    desc="Comparison of household debt in various countries"
                    disableCard={false}
                    link='/household_debt'
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard imgLink={"/static/cards/imf-building.jpeg"} 
                    title='World Economic Outlook' 
                    desc="A look at the IMF's World Economic Outlook, October 2022"
                    disableCard={false}
                    link='/world_econ_outlook'
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <HomeCard />
            </Grid>
            
        </Grid>
        <Copyright sx={{ pt: 4 }} />
    </Box>
  );
}