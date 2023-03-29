import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import CustomTooltip from './CustomToolTip';

const MoneySupplyLineChart = ({data}) => {
    const theme = useTheme();

    // for dollars
    const moneyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    function roundUpToNearest100(value) {
        return Math.ceil(value/100) * 100;
    }

    function getMaxValue() {
        return data.reduce((max, obj) => obj.value > max ? obj.value : max, data[0].value);
    }

    return (
        <ResponsiveContainer width='100%' aspect={3}>
            <LineChart margin={{top: 5, bottom: 5, left: 30, right: 20}} data={data} width={'100%'} height={300}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='date' tickFormatter={(t) => moment(t).format("MMM 'YY")} tickMargin={5}/>
                <YAxis 
                    type='number' 
                    tickFormatter={(a) => moneyFormatter.format(a)} 
                    domain={[0, dataMax => roundUpToNearest100(dataMax)]}
                    tickCount={8}
                    />
                <Tooltip content={<CustomTooltip moneyFormatter={moneyFormatter} />}/>
                <Line type='monotone' dataKey="value" stroke={theme.palette.primary.main} dot={false}/>
                <Brush dataKey='date' tickFormatter={(t) => moment(t).format("MMM 'YY")} travellerWidth={15}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default MoneySupplyLineChart;