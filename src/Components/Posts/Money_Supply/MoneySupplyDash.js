import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import useMoneySupply from './Hooks/useMoneySupply';
import MoneySupplyLineChart from './Charts/MoneySupplyLineChart';

export const MoneySupplyDash = () => {
    const moneySupply = useMoneySupply();

    function getMostRecentByCountry(c) {
        // in case it hasn't loaded yet
        if (moneySupply.length === 0) {
            return new Array();
        }
        const maxDate = moneySupply.reduce((max, obj) => obj.date > max ? obj.date : max, moneySupply[0].date);
        return moneySupply.filter(obj => obj.date === maxDate && obj.country === c);
    }

    function getValuesByTypeAndCountry(t,c) {
        // in case it hasn't loaded yet
        if (moneySupply.length === 0) {
            return new Array();
        }
        return moneySupply.filter(obj => obj.country === c && obj.type === t);
    }
    
    return (
        <Box sx={{m:2}}>
            <Typography variant='h1'>Money Supply</Typography>
            <Typography variant='h5'>How much money exists in various places?</Typography>
            <Typography variant='body1'>[This page is a work in progress...]</Typography>
            <Typography variant='h5'>Canada</Typography>
            <MoneySupplyLineChart data={getValuesByTypeAndCountry('M1', 'CAN')} />
            {/* <List>
                {getValuesByTypeAndCountry('M1','CAN').map((o) => (
                    <ListItem key={o.id}>
                        <ListItemText primary={o.type}/>
                        <ListItemText primary={o.date}/>
                        <ListItemText primary={o.value}/>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    )
}