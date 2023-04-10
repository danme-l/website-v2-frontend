import React, { useState } from 'react';
import { Box, Typography, Grid, Link } from "@mui/material";
import useOilSupply from './Hooks/useOilSupply';
import { OpecShareStackedAreaChart, OpecCountriesStackedAreaChart } from './Charts/OpecStackedAreaChart';
import { OpecAveLineChart } from './Charts/OpecAveLineChart';
import { XAveButtonMenu } from './Utils/XAveButtonMenu';

export const OpecDash = () => {
    const [rollingAveYears, setRollingAveYears] = useState(5);
    const oilSupply = useOilSupply();
    
    // console.log(oilSupply.filter(entry => entry.in_opec === 1))

    function calculateTotalBySpecificYear(yr, opec = -1) {
        return opec >= 0 ? 
        // only calculate it for an in_opec option if specified
        oilSupply 
            .filter(entry => entry.in_opec === opec && entry.year === yr)
            .reduce((acc, item) => acc + item.value, 0) 
        // calculate it for every country that year 
        : oilSupply
            .filter(entry => entry.year === yr)
            .reduce((acc, item) => acc + item.value, 0)
    }

    // gets an array of total oil production, opec vs non-opec, by year
    function getTotalsByYearArray(originalData) {
        const newData = originalData.reduce((acc, curr) => {

            // check if the year exists in the acc
            const yearIndex = acc.findIndex((item) => item.year === curr.year);
            
            // if the year doesn't exist, add new entry
            if (yearIndex === -1) {
                acc.push({ year: curr.year, non_opec_tot: 0, opec_tot: 0, total_sum: 0 });
            }
            
            // get the index of the year entry in the acc
            const index = yearIndex === -1 ? acc.length - 1 : yearIndex;
            
            // add value to the corresponding opec flag
            if (curr.in_opec === 0) {
                acc[index].non_opec_tot += curr.value;
            } else {
                acc[index].opec_tot += curr.value;
            }
            
            // add the value to the total_sum field
            acc[index].total_sum += curr.value;
            
            return acc;
        }, []);
        return newData;
    }

    // wide format array to compare countries
    function getWideFormatCountryArray(originalData) {
        const wideFormatArray = originalData.reduce((acc, curr) => {
            const existingYear = acc.findIndex((obj) => obj.year === curr.year);
            if (existingYear === -1) {
                acc.push({ year: curr.year, [`${curr.country}`]: curr.value });
            } else {
                acc[existingYear][`${curr.country}`] = curr.value;
            }
            return acc;
            }, []);
        
        return wideFormatArray;
    }


    const handleSetRollingAve = (e) => {
        setRollingAveYears(e.target.value)
    }

    console.log(getWideFormatCountryArray(oilSupply.filter(c => c.in_opec === 1)))
    // console.log(oilSupply);

    return (
        <Box sx={{mx:6}}>
            {/* Intro */}
            <Typography variant="h2">OPEC</Typography>
            <Typography variant='body1'>
                On April 3rd, OPEC announced a production cut (<Link href='https://www.opec.org/opec_web/en/press_room/7120.htm'>press release</Link>) 
                of one million barrels per day, starting in May and continuing through the end of 2023.
            </Typography>
            <Typography variant='h4'>The Organization of Petroleum-Exporting Countries</Typography>
            <Typography variant='body1'>
                This organization functions like a supply cartel for global oil production and consists of thirteen member states:
                Algeria, Angola, Congo, Equatorial Guinea, Gabon, Iran, Iraq, Kuwait, Libya, Nigeria, Saudi Arabia, United Arab Emirates, and Venezuela.            
            </Typography>
            <Typography variant='body1'>
                In 2021, there were {1000*calculateTotalBySpecificYear(2021)} barrels of oil produced. OPEC countries produced {1000*calculateTotalBySpecificYear(2021,1)} of those barrels.   
            </Typography>

            {/* SECTION: Share of global production */}
            <Typography variant='h4'>Historic share of crude oil production</Typography>
            <Typography variant='body1'>
                OPEC member states constitute a very sizeable minority of global oil production. 
                Below they are compared as a block to non-OPEC states.
            </Typography>
            <Typography variant='h6'>1000 barrels/day</Typography>
            <OpecShareStackedAreaChart data={getTotalsByYearArray(oilSupply)} />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <XAveButtonMenu x={rollingAveYears} handleSetRollingAve={handleSetRollingAve}/>
                <Typography variant='h6'> - Year Rolling Average</Typography>
            </Box>
            <OpecAveLineChart data={getTotalsByYearArray(oilSupply)} rollingAveYears={rollingAveYears-1} />

            {/* SECTION: Breakdown by OPEC member state*/}
            <Typography variant='h4'>Breakdown of Crude Oil Production by OPEC Member State</Typography>
            <OpecCountriesStackedAreaChart data={getWideFormatCountryArray(oilSupply.filter(c => c.in_opec === 1))} />
        </Box>
    )
}