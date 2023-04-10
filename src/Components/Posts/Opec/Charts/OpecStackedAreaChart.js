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

    function getCountryArray(arr) {
        let countries = [];
        for(let i=0; i<arr.length; i++) {
            if(!countries.includes(arr[i].country)) {
                countries.push(arr[i].country)
            }
        }
        return countries;
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
                {opecCountries.map((c) => {
                    return (
                        <Area type={'monotone'} dataKey={c} stackId="1" />
                    )
                })}
            </AreaChart>
    )
}