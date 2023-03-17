import { Typography, Box, Link, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
    return (
        <Box sx={{m:4}}>
            <Typography variant="h1">Contact Me</Typography>
            <Link href='https://www.linkedin.com/in/daniel-meleras-29794920a/'>
                <Button endIcon={<LinkedInIcon />}>
                    Linked In
                </Button>
            </Link>
        </Box>
    )
}