import React, { useState } from 'react';
import theme from '../../../../theme';
import { Typography, Paper, TextField, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export const PaymentVsRateChart = ({homePrice, downPayment, mortgageYears}) => {
    const [chartVar, setChartVar] = useState(null);
    const [monthlyPayments, setMonthlyPayments] = useState([]);


    const calculateMonthlyPayment = (interestRate) => {
        // perform mortgage payment calculation
      
        const monthlyInterestRate = interestRate / 100 / 12;
        const loanAmount = homePrice - downPayment;
        const totalPayments = mortgageYears * 12;
        // logic for monthly payment
        const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
        const monthlyPayment = numerator / denominator;
      
        return monthlyPayment.toFixed(2);
    };

    const generateChartData = () => {
        // const interestRates = [2, 3, 4, 5, 6]; // Example interest rates to display
        const interestRates = new Array(100).fill(1).map((_, i) => i*0.1)
        const data = [];
      
        interestRates.forEach(rate => {
          const monthlyPayment = calculateMonthlyPayment(rate);
          data.push({ interestRate: rate, monthlyPayment: Number(monthlyPayment) });
        });
      
        setMonthlyPayments(data);
      };
      
      return (
        <div>
          {/* Existing JSX code */}
          <LineChart width={900} height={400} data={monthlyPayments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="interestRate" label={{ value: 'Interest Rate (%)', position: 'insideBottom', offset: -10 }} />
            <YAxis label={{ value: 'Monthly Payment', angle: -90, position: 'insideLeft', offset: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="monthlyPayment" name="Monthly Payment" stroke={theme.palette.primary.main} strokeWidth={2} />
          </LineChart>
          <Button variant="contained" onClick={generateChartData}>
            Generate Graph
          </Button>
        </div>
      );
      


}