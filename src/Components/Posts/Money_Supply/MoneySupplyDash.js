import React, { useEffect, useState } from 'react';
import { Box, Typography, Drawer, Divider, IconButton, Button, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import useMoneySupply from './Hooks/useMoneySupply';
import MoneySupplyLineChart from './Charts/MoneySupplyLineChart';
import RadioButtonsGroup from './Utils/RadioButtons';
import InfoBox from './Utils/InfoBox';
import DallEPictureCard from '../../Utils/DallEPictureCard';
import SourcesBox from './Utils/SourcesBox';

function getEarliestDate(entries) {
    if (entries.length === 0) {
      return null;
    }
    let earliestDate = new Date(entries[0].date);
    for (let i = 1; i < entries.length; i++) {
      const entryDate = new Date(entries[i].date);
      if (entryDate < earliestDate) {
        earliestDate = entryDate;
      }
    }
    return earliestDate;
  }
  
function getLatestDate(entries) {
    if (entries.length === 0) {
      return null;
    }
    let latestDate = new Date(entries[0].date);
    for (let i = 1; i < entries.length; i++) {
      const entryDate = new Date(entries[i].date);
      if (entryDate > latestDate) {
        latestDate = entryDate;
      }
    }
    return latestDate;
  }

export const MoneySupplyDash = () => {
    const [curType, setCurType] = useState('M0');
    const [curCountry, setCurCountry] = useState(null);
    const [dateRange, setDateRange] = useState([]); // TODO for date filtering
    const [sourcesDrawerOpen, setSourcesDrawerOpen] = useState(null);
    const [expandGraph, setExpandGraph] = useState(false);
    const moneySupply = useMoneySupply();

    useEffect(() => {
        setDateRange([getEarliestDate(moneySupply), getLatestDate(moneySupply)]);
    }, []);

    const handleTypeChange = (event) => {
        setCurType(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCurCountry(event.target.value);
    };

    const buttonDisabler = () => {
        // so the button is disabled but still appears
        if (curCountry == 'USA') {
            return 'M3'
        }
    };

    function getMostRecentByCountry(c) {
        // in case it hasn't loaded yet
        if (moneySupply.length === 0) {
            return new Array();
        }
        const maxDate = moneySupply.reduce((max, obj) => obj.date > max ? obj.date : max, moneySupply[0].date);
        return moneySupply.filter(obj => obj.date === maxDate && obj.country === c);
    }

    function getValuesByTypeAndCountry(t,c) {
        // in case it hasn't loaded yet
        if (moneySupply.length === 0) {
            return new Array();
        }
        return moneySupply.filter(obj => obj.country === c && obj.type === t);
    }

    function filterEntriesByDate(entries, date1, date2) {
        return entries.filter(entry => {
          const entryDate = new Date(entry.date);
          return entryDate >= date1 && entryDate <= date2;
        });
      }
    
    return (
        <Box sx={{m:2}}>
            {/* Header */}
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Box sx={{mx:4}}>
                    <Typography variant='h1'>Money Supply</Typography>
                    <Typography variant='body1'>How much money exists in various places?</Typography>
                </Box>
                <Box sx={{mx:2}}>
                    {/* For now there's only two countries */}
                    <Typography variant='h5'>{curCountry === "CAN" ? 'Canada' : 'United States'} | {curType}</Typography> 
                    <Typography variant='body1'>Values given in billions of the local currency.</Typography>
                </Box>
                <IconButton onClick={() => setSourcesDrawerOpen(!sourcesDrawerOpen)}>
                    <InfoIcon />
                </IconButton>
            </Box>           
            <Divider sx={{my:2}}/>
            <Grid container>
                <Grid item xs={expandGraph ? 12 : 8}>
                    <MoneySupplyLineChart data={getValuesByTypeAndCountry(curType, curCountry)} />
                </Grid>
                <Grid item xs={expandGraph ? 5 : 3}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <RadioButtonsGroup 
                            type={curType} 
                            handleChange={handleTypeChange} 
                            label={'Money Supply Type'} 
                            buttons={['M0','M1','M2','M3']}
                            disable={buttonDisabler()}
                        />
                        <RadioButtonsGroup 
                            type={curCountry} 
                            handleChange={handleCountryChange} 
                            label={'Country'} 
                            buttons={['CAN','USA']}
                        />
                        <Button 
                            sx={{width:'50%'}} 
                            variant='contained'
                            onClick={() => setExpandGraph(!expandGraph)}
                            >
                            {expandGraph ?  "Collapse Graph" : "Expand Graph"}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
            <Grid container>
                <Grid item xs={8}>
                    <InfoBox type={curType}/>
                </Grid>
                <Grid item xs={4}>
                    <DallEPictureCard prompt={"minimalist digital art of a man pondering over a stack of cash, with dark blue and orange color scheme"}/>
                </Grid>
            </Grid>
            <Drawer open={sourcesDrawerOpen} variant='persistent' anchor='bottom'>
                <SourcesBox country={curCountry}/>
            </Drawer>
        </Box>
    )
}