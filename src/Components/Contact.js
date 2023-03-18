import { Typography, Box, Link, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

export const Contact = () => {
    return (
        <Box sx={{m:4}}>
            <Typography variant="h1">Contact</Typography>
            <Link href='https://www.linkedin.com/in/daniel-meleras-29794920a/' underline="none">
                <Button startIcon={<LinkedInIcon />}>
                    Linked In
                </Button>
            </Link>
            <Button startIcon={<ArticleIcon />} href="https://github.com/danme-l/website-v2-frontend/raw/dev/public/assets/danielMeleras.pdf" download>
                Resume
            </Button>
        </Box>
    )
}