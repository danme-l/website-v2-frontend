import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Legend, Label, Cell } from 'recharts';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

const RemovedCountriesBox = ({ removedCountries, onRestoreCountry }) => {
    return (
      <Box>
        {removedCountries.map((country) => (
          <Button key={country.country} onClick={() => onRestoreCountry(country)}>
            {country.country}
          </Button>
        ))}
      </Box>
    );
  };

export const OpecCountryBarchart = ({data, barchartYear}) => {
    const [focusBar, setFocusBar] = useState(null);
    const [chartData, setChartData] = useState([])
    const [removedCountries, setRemovedCountries] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        setChartData(data.filter((d) => d.year == barchartYear));
    }, [data]);

    // click a bar to remove the country from the chart
    const handleBarClick = (data, index) => {
        // removes the country from chart data
        const countryToRemove = chartData[index].country; 

        // adjusts the chart data
        const newData = chartData.filter((item) => item.country !== countryToRemove); 

        // stores the removed country 
        const removedCountry = chartData.find((item) => item.country === countryToRemove);

        // update state
        setChartData(newData);
        setRemovedCountries(prevState => [...prevState, removedCountry])
        console.log(removedCountries)
      };

    const handleRestoreCountry = (country) => {
        const restoredCountry = removedCountries.find((item) => item.country === restoredCountry)
        if (restoredCountry) {
            const newChartData = [...chartData, restoredCountry];
            setChartData(newChartData);
            const newRemovedCountries = removedCountries.filter((item) => item.country !== country);
            setRemovedCountries(newRemovedCountries);
        }
    }

    return (
        <Box display={'flex'} flexDirection={'row'}>
            <BarChart data={chartData}
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
                <Bar dataKey="value" fill={theme.palette.primary.light} onClick={handleBarClick}>
                {chartData.map((entry, index) => (
                    <Cell
                    fill={focusBar === index ? theme.palette.secondary.main : theme.palette.primary.main } 
                    />
                    ))}
                </Bar>
            </BarChart>
            {/* Readding removed countries needs some work */}
            {/* <RemovedCountriesBox removedCountries={removedCountries} onRestoreCountry={handleRestoreCountry} /> */}
        </Box>
    )
}