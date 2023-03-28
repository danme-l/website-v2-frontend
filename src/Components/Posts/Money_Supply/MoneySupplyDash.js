import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Zoom, Divider, IconButton, Button, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import useMoneySupply from './Hooks/useMoneySupply';
import MoneySupplyLineChart from './Charts/MoneySupplyLineChart';
import RadioButtonsGroup from './Utils/RadioButtons';
import InfoBox from './Utils/InfoBox';

export const MoneySupplyDash = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [curType, setCurType] = useState('M0');
    const [curCountry, setCurCountry] = useState(null);
    const [expandGraph, setExpandGraph] = useState(false);
    const moneySupply = useMoneySupply();

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
    }

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
    
    return (
        <Box sx={{m:2}}>
            {/* Header */}
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Box sx={{mx:2}}>
                    <Typography variant='h1'>Money Supply</Typography>
                    <Typography variant='body1'>How much money exists in various places?</Typography>
                </Box>
                <Box sx={{mx:2}}>
                    {/* For now there's only two countries */}
                    <Typography variant='h5'>{curCountry === "CAN" ? 'Canada' : 'United States'} | {curType}</Typography> 
                    <Typography variant='body1'>Values given in billions of the local currency.</Typography>
                </Box>
                <IconButton onClick={() => setShowInfo(!showInfo)}>
                    <InfoIcon />
                </IconButton>
            </Box>           
            <Divider sx={{my:2}}/>
            <Grid container>
                <Grid item xs={expandGraph ? 12 : 8}>
                    <MoneySupplyLineChart data={getValuesByTypeAndCountry(curType, curCountry)} />
                </Grid>
                <Grid item xs={3}>
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
                            Expand Graph
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}