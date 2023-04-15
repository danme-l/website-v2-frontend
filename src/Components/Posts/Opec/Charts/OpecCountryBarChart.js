import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Legend, Label, Cell } from 'recharts';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

export const OpecCountryBarchart = ({data, barchartYear}) => {
    const [focusBar, setFocusBar] = useState(null);
    const theme = useTheme();

    console.log(data.filter((d) => d.year == barchartYear))

    return (
        <BarChart data={data.filter((d) => d.year == barchartYear)}
            width={900}
            height={400}
            onMouseMove={(state) => {
                if (state.isTooltipActive) {
                  setFocusBar(state.activeTooltipIndex);
                } else {
                  setFocusBar(null);
                }
            }}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country"  />
            <YAxis/>
            <Tooltip />
            <Bar dataKey="value" fill={theme.palette.primary.light} >
            {data.map((entry, index) => (
                <Cell
                fill={focusBar === index ? theme.palette.secondary.main : theme.palette.primary.main } 
                />
            ))}
            </Bar>
        </BarChart>
    )
}