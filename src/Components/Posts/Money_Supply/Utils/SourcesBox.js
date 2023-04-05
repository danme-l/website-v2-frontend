import { useState } from 'react';
import {Box, Drawer, Typography, Link} from '@mui/material';

const SourcesBox = ({country, sourceName, sourceLink}) => {
    function sourcesInfo(c) {
        switch(c) {
            case 'CAN':
                return (
                    <Box>
                        <Typography variant='body1'>
                            Bank of Canada, via StatsCan.
                        </Typography>
                        <Typography variant='body'>
                            <Link href='https://www150.statcan.gc.ca/t1/tbl1/en/cv.action?pid=1010011601'>
                                StatsCan website.
                            </Link>
                        </Typography>
                    </Box>
                )
            case 'USA':
                return (
                    <Box>
                        <Typography variant='body1'>
                            St Louis Federal Reserve, through their amazing FRED API.
                        </Typography>
                        <Typography variant='body'>
                            <Link href='https://fred.stlouisfed.org/categories/24'>
                                FRED Website
                            </Link>
                        </Typography>
                    </Box>
                )
        }
    };

    return (
        <Box sx={{m:3}}>
            <Typography variant='h3'>Sources</Typography>
            {sourcesInfo(country)}
        </Box>
    )
}

export default SourcesBox;