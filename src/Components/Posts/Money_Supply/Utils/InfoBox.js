import { Box, Typography } from "@mui/material";

function M0Box() {
    return (
        <Typography variant="body1">
            This is all of the cash and coins in circulation. This includes the dollars in 
            your wallet, the coins in the jar in your closet, and the stacks of cash behind the drywall
            in your local trap house.
        </Typography>
    )
}

function M1Box() {
    return (
        <Typography variant="body1">
            This is everything in M0, plus ...
        </Typography>
    )
}

const InfoBox = ({type}) => {
    return (
        <Box sx={{mx:4, my:4}}>
            <Typography variant='h3'>What is the money supply?</Typography>
            <Typography variant='body1'>
                There are tons of different definitions, but most commonly, the money supply is defined as
                the sum total of all cash or cash equivalents in an economy. Any definition of it includes 
                the paper dollars, euros, dinars, or pesos in your pocket. Most defintions of it also include
                the number the appears under "Chequings" when you open your banking app.
            </Typography>
            <Typography variant='body1'>
                What do M0, M1, MX all mean?
            </Typography>
            <Typography variant="h3">{type}</Typography>
            {type === 'M0' ? <M0Box /> : 
             type === 'M1' ? <M1Box /> :
            null}
        </Box>
    )
}

export default InfoBox;