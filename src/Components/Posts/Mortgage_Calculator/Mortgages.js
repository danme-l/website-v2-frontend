import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Link, Divider, Slider, Stack } from "@mui/material";
import { AmortizationSchedChart } from './Charts/AmortizationSchedChart';
import { formatter } from '../../Utils/currencyFormatter';

export const Mortgages = () => {
    const [homePrice, setHomePrice] = useState(500000);
    const [downPayment, setDownPayment] = useState(100000);
    const [mortgageYears, setMortgageYears] = useState(25);
    const [interestRate, setInterestRate] = useState(5);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);

    function calculateMonthlyPayment(homePrice, downPayment, mortgageYears, interestRate) {
        const principal = homePrice - downPayment;
        const monthlyInterestRate = interestRate / 100 / 12;
        const totalPayments = mortgageYears * 12;
      
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
      
        const monthlyPayment = numerator / denominator;
        return monthlyPayment.toFixed(2); // Return the monthly payment rounded to two decimal places
      }

    const calculateAmortizationSchedule = () => {
      // clear previous amortization schedule
      setAmortizationSchedule([]);
    
      // amortization calculation, generate the schedule
      const schedule = [];
      const principal = homePrice - downPayment;
      const monthlyInterestRate = interestRate / 100 / 12;
      const totalPayments = mortgageYears * 12;
      let remainingBalance = principal;
    
      for (let paymentNumber = 1; paymentNumber <= totalPayments; paymentNumber++) {
        const interestAmount = remainingBalance * monthlyInterestRate;
        const paymentAmount = calculatePaymentAmount(principal, totalPayments, monthlyInterestRate);
        const principalAmount = paymentAmount - interestAmount;
        remainingBalance -= principalAmount;
    
        const payment = {
          paymentNumber,
          paymentAmount,
          principalAmount,
          interestAmount,
          remainingBalance,
        };
    
        schedule.push(payment);
      }
    
      // update with the new amortization schedule
      setAmortizationSchedule(schedule);
    };
      
    const calculatePaymentAmount = (principal, totalPayments, monthlyInterestRate) => {
      //  determine the monthly payment amount
      const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
      const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
    
      return numerator / denominator;
    };

    // handlers for textboxes, button
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
        <Box sx={{m:3}}>
            <Typography variant='h1' sx={{my:2}}>Mortgage Calculator</Typography>
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
                    <Button variant='contained' onClick={() => {
                      handleCalculateMonthlyPayment()
                      calculateAmortizationSchedule()
                    }
                      }>
                        Calculate
                    </Button>
                </Box>
            </Box>
            
            <Typography variant='h3'>Amortization Schedule</Typography>
            <Box display={'flex'} flexDirection={'row'}>

              <AmortizationSchedChart data={amortizationSchedule} monthlyPayment={monthlyPayment}/>
              <Box>
                <Typography variant='h6'>
                    Monthly payment: {monthlyPayment === 'NaN' ? "Enter values..." : formatter.format(monthlyPayment)}
                </Typography>
                <Typography variant='body1'>
                      You will make {mortgageYears*12} total payments of {formatter.format(monthlyPayment)}, 
                      for an entire purchase cost of {formatter.format(monthlyPayment*mortgageYears*12)}.
                </Typography>
                <Typography variant='body1'>
                  {formatter.format(homePrice)} will go to your home and {formatter.format(monthlyPayment*mortgageYears*12 - homePrice)} will be paid 
                  to the lender as interest, roughly a {(100*((monthlyPayment*mortgageYears*12 - homePrice)/ homePrice)).toFixed(2)}% cost of borrowing.
                </Typography>
              </Box>
            </Box>
        </Box>

    )
}