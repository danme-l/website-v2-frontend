import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Link, Divider, Slider, Stack } from "@mui/material";

export const Mortgages = () => {
    const [homePrice, setHomePrice] = useState(500000);
    const [downPayment, setDownPayment] = useState(100000);
    const [mortgageYears, setMortgageYears] = useState(25);
    const [interestRate, setInterestRate] = useState(5);
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    function calculateMonthlyPayment(homePrice, downPayment, mortgageYears, interestRate) {
        const principal = homePrice - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const totalPayments = mortgageYears * 12;
      
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
      
        const monthlyPayment = numerator / denominator;
        return monthlyPayment.toFixed(2); // Return the monthly payment rounded to two decimal places
      }

    const handleHomePriceChange = (event) => {
        setHomePrice(event.target.value);
      };
    
      const handleDownPaymentChange = (event) => {
        setDownPayment(event.target.value);
      };
    
      const handleMortgageYearsChange = (event) => {
        setMortgageYears(event.target.value);
      };
    
      const handleInterestRateChange = (event) => {
        setInterestRate(event.target.value);
      };

      const handleCalculateMonthlyPayment = () => {
        setMonthlyPayment(calculateMonthlyPayment(homePrice, downPayment, mortgageYears, interestRate));
      }

    return (
        <Box>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Box sx={{mx:2}} >
                    <Typography variant='h5'>Price</Typography>
                    <TextField 
                        variant="outlined"
                        value={homePrice}
                        onChange={handleHomePriceChange}/>
                </Box>
                <Box sx={{mx:2}} >
                    <Typography variant='h5'>Down Payment</Typography>
                    <TextField 
                        variant="outlined"
                        value={downPayment}
                        onChange={handleDownPaymentChange}
                        />
                </Box>
                <Box sx={{mx:2}} >
                    <Typography variant='h5'>Years</Typography>
                    <TextField
                        variant="outlined"
                        value={mortgageYears}
                        onChange={handleMortgageYearsChange}
                        />
                </Box>
                <Box sx={{mx:2}} >
                    <Typography variant='h5'>Interest Rate</Typography>
                    <TextField
                        variant="outlined"
                        value={interestRate}
                        onChange={handleInterestRateChange}
                        />
                </Box>
                <Box sx={{mx:2}} > 
                    {/* TODO button needs to work on enter */}
                    <Button variant='outlined' onClick={handleCalculateMonthlyPayment}>
                        Go
                    </Button>
                </Box>
            </Box>

            <Typography variant='h6'>
                Monthly payment: {monthlyPayment === 'NaN' ? "Enter values..." : monthlyPayment}
            </Typography>
        </Box>

    )
}