import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import theme from '../../../../theme';
import { Typography, Paper } from '@mui/material';

const CustomTooltip = ({ active, payload, label }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    if (active && payload && payload.length) {
        const year = Math.ceil(payload[0].payload['paymentNumber'] / 12)
        const month = (payload[0].payload['paymentNumber'] % 12) + 1
        return (
        <Paper sx={{p:2, opacity:0.85}}>
            <Typography variant='body1'>Year {year}, Month {month}</Typography>
            <Typography variant='body1'>Payment towards the interest: {formatter.format(payload[0].payload['interestAmount'])}</Typography>
            <Typography variant='body1'>Payment towards the principal: {formatter.format(payload[0].payload['principalAmount'])}</Typography>
        </Paper>
        );
    }
    return null;
  };

export const AmortizationSchedChart = ({data, monthlyPayment}) => {
    return (
        <LineChart
            width={900}
            height={400}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
                }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="paymentNumber" />
            <YAxis />
            <Tooltip content={<CustomTooltip /> }/>
            <ReferenceLine y={monthlyPayment} stroke={theme.palette.primary.dark} fill={theme.palette.primary.dark}/>
            <Line type="monotone" dataKey="interestAmount" stroke={theme.palette.secondary.light} fill={theme.palette.secondary.light} />
            <Line type="monotone" dataKey="principalAmount" stroke={theme.palette.primary.light} fill={theme.palette.primary.light} />
        </LineChart>
    )
}