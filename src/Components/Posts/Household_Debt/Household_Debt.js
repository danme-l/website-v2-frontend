import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';

// mui
import { Box, Typography, Button, IconButton, Paper, Grid, Slider, List, ListItem, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//recharts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

import { DataSection } from './DataSection';
import ReactCountryFlag from "react-country-flag"

export const HouseholdDebt = () => {
    const [debtData, setDebtData] = useState([]);
    const [curCountry, setCurCountry] = useState(null);
    const [curCountryData, setCurCountryData] = useState([]);
    const [barchartDate, setBarchartDate] = useState("Sat, 01 Jan 2022 00:00:00 GMT")
    const [dataDrawerOpen, setDataDrawerOpen] = useState(false);
    var dates = [...new Set(debtData.map((r) => r.date))]

    const theme = useTheme();

    useEffect(() => {
        getData();
        setCurCountryData(() => debtData.filter(c => c.country === countryCodes[curCountry]))
    }, [curCountry]);

    // fetches data from my API currently at localhost 
    function getData() { 
        fetch('https://website-v2-backend.onrender.com/econ/household_debt')
            .then(response => {
                return response.json(); 
            })
            .then(data => {
                setDebtData(data.filter((d) => d.value > 0));  // GB has some 0 values that make a sin-like curve - no good
            });
        }
    
    const toggleDrawer = () => {
        setDataDrawerOpen(!dataDrawerOpen);
    };

    const countryCodes = {
        'US':"The United States",
        'CA':"Canada",
        'GB':"The United Kingdom",
        'ES':"Spain",
        'FR':"France",
        'AU':"Australia",
        'KR':"South Korea",
        'DE':"Germany",
        'ZA':"South Africa",
        'PL':"Poland"
    }   

    function CountryButton(props) {
        const handleCountryChange = (event) => {
            // handles clikcing the button icon and the space in the button around the icon
          const target = event.target;
          if (target.tagName.toLowerCase() === 'img') {
            setCurCountry(props.value);
          } else {
            setCurCountry(target.value);
          }
        };
      
        const handleImgClick = (event) => {
          event.stopPropagation(); // stop event propagation to parent button
          handleCountryChange(event); // pass click event to handleCountryChange function
        };
      
        return (
          <Button onClick={handleCountryChange} value={props.value} sx={{fontSize:'1.4em'}}>
            <ReactCountryFlag onClick={handleImgClick} countryCode={props.value} svg size='2em'/>
          </Button>
        );
      }

    return (
        <Box sx={{m: 2}}>
            <Grid container spacing={4}>
                {/* Header */}
                <Grid item xs={12}>
                    <Typography variant='h2'>Household Debt as a Percentage of GDP</Typography>
                    <Typography variant='h4'>{curCountry ? countryCodes[curCountry] : "Select a Country"}</Typography>
                </Grid>
           
                <Grid container item xs={2}>
                    {Object.keys(countryCodes).map((c) => (
                        <Grid item xs={6} key={c}>
                            <CountryButton value={c} name=""/>
                        </Grid>
                    ))}
                </Grid>
                    
                <Grid item xs={10}>
                    <ResponsiveContainer width={'90%'} height={250}>
                        <LineChart  data={curCountryData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* Axes should only be rendered when country is selected */}
                            {curCountry && <XAxis dataKey="date" tickFormatter={(t) => moment(t).format("YYYY")} />}
                            {curCountry && <YAxis domain={[0,140]}/>}
                            <Tooltip />
                            <ReferenceLine y={100} stroke={theme.palette.secondary.main} label="100%" />
                            <Line type="monotone" dataKey="value" stroke={theme.palette.primary.light} />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{m:2, p:1}}>
                        <Typography variant='h4'>Above</Typography>
                        <Typography variant='body1'>Time series of total household debt as a percentage of Gross Domestic Product for select countries. Use the flag icons to select a country.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{m:2, p:1}}>
                        <Typography variant='h4'>Below</Typography>
                        <Typography variant='body1'>Country comparison at specific points. Use the slider to select a date. Some countries are missing data for some dates see source notes below.</Typography>
                    </Box>
                </Grid>
                
                <Grid item xs={2}>
                <Typography variant='h6'>{moment(barchartDate).format('MMM DD, YYYY')}</Typography>
                <Slider
                    min={0} max={79}
                    defaultValue={30}
                    aria-label="Date"
                    onChange={(event) => setBarchartDate(dates[event.target.value])}
                    />
                </Grid>
                <Grid item xs={10}>
                    <ResponsiveContainer width={'90%'} height={250}>
                        <BarChart  data={debtData.filter((d) => d.date === barchartDate)}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* Axes should only be rendered when country is selected */}
                            <XAxis dataKey="country"  />
                            <YAxis domain={[0,140]}/>
                            <Tooltip />
                            <ReferenceLine y={100} stroke={theme.palette.secondary.main} label="100%" />
                            <Bar type="monotone" dataKey="value" fill={theme.palette.primary.light} />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
                <Button sx={{ m: 4, "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }} onClick={toggleDrawer} >Data</Button>
                <Drawer open={dataDrawerOpen} variant='persistent' anchor='bottom'>
                    <DataSection toggleDrawer={toggleDrawer} />
                </Drawer>
            </Grid>
        </Box>
    )
}

