import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import useMoneySupply from './Hooks/useMoneySupply';
import MoneySupplyLineChart from './Charts/MoneySupplyLineChart';
import RadioButtonsGroup from './Utils/RadioButtons';

export const MoneySupplyDash = () => {
    const [curType, setCurType] = useState('M0')
    const [curCountry, setCurCountry] = useState(null)
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
            </Box>           
            <Divider sx={{my:2}}/>            
            <MoneySupplyLineChart data={getValuesByTypeAndCountry(curType, curCountry)} />
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
            </Box>
        </Box>
    )
}