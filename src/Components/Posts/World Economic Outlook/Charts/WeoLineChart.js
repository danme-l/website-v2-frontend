import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeoLineChart = ({data}) => {
    return (
        <ResponsiveContainer width='100%' aspect={3.5}>
            <LineChart margin={{top: 5, bottom: 5, left: 20, right: 20}} data={data} width={500} height={300}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='year' />
                <YAxis type='number' />
                <Tooltip />
                <Line type='monotone' dataKey="value" stroke="#8884d8"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default WeoLineChart;