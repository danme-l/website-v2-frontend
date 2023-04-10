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
        <Box>
            <Typography variant="body1">
                This is everything in M0, plus anything that can be "quickly converted to cash" - the numbers 
                that are in your chequings accounts at your bank. When you pay for something with 
                your debit card, it has been used essentially just like cash would have been used - paying for
                goods or services. 
            </Typography>
            <Typography variant="body">
                Of course, it can't <em>all</em> be "quickly converted to cash". The amount that can be converted 
                to cash is equal to M0, i.e., the total amount of cash. When there is a demand for more than M0 
                paper dollars, you get a bank run.
            </Typography>
        </Box>
    )
}

function M2Box() {
    return (
        <Box>
            <Typography variant="body1">
                This is everything in M1, plus other short-term savings vehicles, like your savings acocunt. It also usually includes CD's 
                (Certificates of Deposit), and MMA's (Money Market Accounts - similar but distinct to Money Market Funds). Basically, it includes assets that are very liquid but aren't 
                usable as a Medium of Exchange.
            </Typography>
        </Box>
    )
}

function M3Box() {
    return (
        <Box>
            <Typography variant="body1">
                This is everything in M2, plus other forms of liquid deposits that would more commonly be held by large financial institutions and 
                companies, rather than the average joe or the neighborhood sandwich store.
            </Typography>
            <Typography variant="body1">
                This can include investment instruments like larger time deposits, MMF's, short-term repurchase agreements (repo's), etc.
            </Typography>
        </Box>
    )
}

function M4Box() {
    return (
        <Box>
            <Typography variant="body1">
                This is everything in M3, plus certain other kinds lending to the private sector. It includes not only liquid assets, but credit extended by the banks. 
            </Typography>
            <Typography variant="body1">
                Usually it doesn't include collateralized loans like your mortgage; it does typically include credit card debt, overdrafts, business loans, etc.
            </Typography>
        </Box>
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
             type === 'M2' ? <M2Box /> : 
             type === 'M3' ? <M3Box /> :
             type === 'M4' ? <M4Box /> :
            null}
        </Box>
    )
}

export default InfoBox;