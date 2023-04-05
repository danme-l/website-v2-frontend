import { Paper, Typography } from "@mui/material";
import moment from "moment";

const CustomTooltip = ({ active, payload, moneyFormatter}) => {
    if (active && payload && payload.length) {
        return (
            <Paper elevation={3} sx={{px:2, py:1}}>
                <Typography variant='body1'>{moment(payload[0].payload['date']).format('MMM YYYY')}</Typography>
                <Typography variant='body1'>{moneyFormatter.format(payload[0].value)} Billion</Typography>
            </Paper>
        )
    };
    return null;        
}

export default CustomTooltip;