import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';

const MoneySupplyLineChart = ({data}) => {
    const theme = useTheme();

    // for dollars
    const moneyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    function roundToNearest100(value) {
        return Math.round(value/100) * 100;
    }

    function getMaxValue() {
        return data.reduce((max, obj) => obj.value > max ? obj.value : max, data[0].value);
    }
    console.log(data)

    return (
        <ResponsiveContainer width='100%' aspect={3.5}>
            <LineChart margin={{top: 5, bottom: 5, left: 20, right: 20}} data={data} width={500} height={300}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='date' tickFormatter={(t) => moment(t).format("MMM 'YY")}/>
                <YAxis 
                    type='number' 
                    tickFormatter={(a) => moneyFormatter.format(a)} 
                    domain={[0, dataMax => roundToNearest100(dataMax)]}
                    padding={0}
                    />
                <Tooltip />
                <Line type='monotone' dataKey="value" stroke={theme.palette.primary.main}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default MoneySupplyLineChart;