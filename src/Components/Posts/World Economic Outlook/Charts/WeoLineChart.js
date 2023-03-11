import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';

const WeoLineChart = ({data, estimates_start}) => {
    const theme = useTheme();
    return (
        <ResponsiveContainer width='100%' aspect={3.5}>
            <LineChart margin={{top: 5, bottom: 5, left: 20, right: 20}} data={data} width={500} height={300}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='year' />
                <YAxis type='number' />
                <Tooltip />
                <ReferenceLine x={estimates_start} stroke={theme.palette.secondary.light} label="Estimates Start"/>
                <Line type='monotone' dataKey="value" stroke={theme.palette.primary.main}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default WeoLineChart;