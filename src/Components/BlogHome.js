import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

export const BlogHome = () => {
  return (
    <Box sx={{ my: 4, mx: 16 }}>
        
        <Grid container spacing={5}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Paper elevation={5} sx={{ px: 5, py: 3}}>
                <Typography variant='h6'>Blog.</Typography>
                <Typography variant='body1'>Coming soon</Typography>
              </Paper>
            </Grid>
        </Grid>
    </Box>
  );
}