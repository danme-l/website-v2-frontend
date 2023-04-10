import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { CustomTooltipAveLineChart, CustomLegend } from './opecCustomChartComponents';

export const OpecAveLineChart = ({data, rollingAveYears}) => {
    const theme = useTheme();

    const customLegendFormatter = (value, entry) => {
        if (entry.value === 'opec_roll_ave') {
            return 'OPEC'
        } else if (entry.value === 'not_opec_roll_ave') {
            return 'Non OPEC'
        }
    }

    // get array of 5 year rolling averages
    const rollingAverages = data.map((item, index) => {
        
        // init the new item to null values
        const rollingAveragesItem = {
          year: item.year,
          not_opec_roll_ave: null,
          opec_roll_ave: null,
        };
      
        // init rolling values to 0
        let rollingSum0 = 0;
        let rollingSum1 = 0;
        let rollingCount = 0;
      
        // iterate through 5 previous years
        for (let i = index; i >= 0 && i >= index - rollingAveYears; i--) {
          rollingSum0 += data[i].non_opec_tot;
          rollingSum1 += data[i].opec_tot;
          rollingCount++;
        }
      
        // calculate the averages of those years
        rollingAveragesItem.not_opec_roll_ave =
          rollingSum0 / rollingCount;
        rollingAveragesItem.opec_roll_ave =
          rollingSum1 / rollingCount;
      
        return rollingAveragesItem;
      });

    return (
        <LineChart
            data={rollingAverages}
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
                <Tooltip content={CustomTooltipAveLineChart}/>
                <Legend formatter={customLegendFormatter}/>
                <Line type="monotone" dataKey="opec_roll_ave" stroke={theme.palette.primary.dark} />
                <Line type="monotone" dataKey="not_opec_roll_ave" stroke={theme.palette.primary.light}/>
            </LineChart>
    )
}
