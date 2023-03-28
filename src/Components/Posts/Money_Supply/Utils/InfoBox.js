import { Box, Typography } from "@mui/material"

const InfoBox = ({display}) => {
    return (
        <Box display={display}>
            <Typography variant="h3">
                MX
            </Typography>
        </Box>
    )
}

export default InfoBox;