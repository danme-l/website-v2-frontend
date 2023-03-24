import { Box, Typography, List, ListItem } from '@mui/material';
import useMoneySupply from './Hooks/useMoneySupply';

export const MoneySupplyDash = () => {
    const moneySupply = useMoneySupply();

    console.log(moneySupply);

    const getMostRecentByCountry = (c) => {
        const maxDate = moneySupply.reduce((max, obj) => obj.date > max ? obj.date : max, moneySupply[0].date);
        return moneySupply.filter(obj => obj.date === maxDate && obj.country === c);
    }

    console.log(getMostRecentByCountry('CAN'));
    
    return (
        <Box sx={{m:2}}>
            <Typography variant='h1'>Money Supply</Typography>
            <Typography variant='h5'>How much money exists in various places?</Typography>
            <Typography variant='body1'>[This page is a work in progress...]</Typography>

            <Typography variant='h5'>Canada</Typography>
            <List>
                {Object.keys(getMostRecentByCountry('CAN')).map((o) => (
                        <ListItem k={o.id}>
                            {/* <Typography variant='body1'>{o.date}</Typography>
                            <Typography variant='body1'>{o.type}</Typography>
                            <Typography variant='body1'>{o.value}</Typography> */}
                        </ListItem>
                    ))}
            </List>
        </Box>
    )
}