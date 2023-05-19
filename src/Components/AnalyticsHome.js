import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { AnalyticsCard } from './AnalyticsCard';

export const AnalyticsHome = () => {
  return (
    <Box sx={{ my: 4, mx: 16 }}>
        
        <Grid container spacing={5}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Paper elevation={5} sx={{ px: 5, py: 3}}>
                <Typography variant='h6'>Analytics.</Typography>
                <Typography variant='body1'>Various Data visualizations</Typography>
                <Typography variant='body2'>
                    May 9, 2023: I am currently having an issue with the database that I do not have the time at the moment to troubleshoot. 
                    As such, I am currently considering this project "on pause" until I can circle back to it.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard imgLink={"/static/cards/bill.webp"} 
                    title='Household Debt' 
                    desc="Comparison of household debt in various countries"
                    disableCard={false}
                    link='/household_debt'
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard imgLink={"/static/cards/imf-building.jpeg"} 
                    title='World Economic Outlook' 
                    desc="A look at the IMF's World Economic Outlook, October 2022"
                    disableCard={false}
                    link='/world_econ_outlook'
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard imgLink={"/static/cards/bills.jpeg"} 
                    title='Money Supply' 
                    desc="How much money exists? M0, M1, etc"
                    disableCard={false}
                    link='/money_supply'
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard imgLink={"/static/cards/opec.jpg"} 
                    title='Looking at OPEC' 
                    desc="How much oil comes from them?"
                    disableCard={false}
                    link='/opec'
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <AnalyticsCard />
            </Grid>
            
        </Grid>
    </Box>
  );
}