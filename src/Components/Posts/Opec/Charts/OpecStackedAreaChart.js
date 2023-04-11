import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { CustomTooltipStackedChart, CustomLegend } from './opecCustomChartComponents';

export const OpecShareStackedAreaChart = ({data}) => {
    const theme = useTheme();

    const customLegendFormatter = (value, entry) => {
        if (entry.value === 'opec_tot') {
            return 'OPEC'
        } else if (entry.value === 'non_opec_tot') {
            return 'Non OPEC'
        }
    }

    return (
        <AreaChart
            data={data}
            width={900}
            height={400}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltipStackedChart />} />
                <Legend formatter={customLegendFormatter}/>
                <Area type={'monotone'} dataKey={'opec_tot'} stackId="1" stroke={theme.palette.primary.dark} fill={theme.palette.primary.dark} />
                <Area type={'monotone'} dataKey={'non_opec_tot'} stackId="1" stroke={theme.palette.primary.light} fill={theme.palette.primary.light} />
            </AreaChart>
    )
}


export const OpecCountriesStackedAreaChart = ({data}) => {
    const theme = useTheme();

    function getColor(index) {
        const startColor = [0, 155, 244];
        const endColor = [0, 60, 95]; 
        
        const rDiff = endColor[0] - startColor[0];
        const gDiff = endColor[1] - startColor[1];
        const bDiff = endColor[2] - startColor[2];
        
        const rIncrement = rDiff / 12;
        const gIncrement = gDiff / 12;
        const bIncrement = bDiff / 12;
        
        const r = Math.round(startColor[0] + index * rIncrement);
        const g = Math.round(startColor[1] + index * gIncrement);
        const b = Math.round(startColor[2] + index * bIncrement);
        
        return "#" + [r, g, b].map(c => c.toString(16).padStart(2, "0")).join("");
      }

    const opecCountries = ['Algeria', 'Angola', 'Congo', 'Equatorial Guinea', 'Gabon', 'IR Iran', 'Iraq', 'Kuwait', 'Libya', 'Nigeria', 'Saudi Arabia', 'United Arab Emirates', 'Venezuela']

    const customLegendFormatter = (value, entry) => {
        if (entry.value === 'opec_tot') {
            return 'OPEC'
        } else if (entry.value === 'non_opec_tot') {
            return 'Non OPEC'
        }
    }

    return (
        <AreaChart
            data={data}
            width={900}
            height={400}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {opecCountries.map((c, i) => {
                    return (
                        <Area type={'monotone'} dataKey={c} stackId="1" 
                            stroke={getColor(i)}
                            fill={getColor(i)}/>
                    )
                })}
            </AreaChart>
    )
}