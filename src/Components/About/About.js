import { Typography, Box, Zoom, Button } from "@mui/material";
import Pics from "./Pics";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const About = () => {
    const [aboutMe, setAboutMe] = useState(false);
    const [aboutSite, setAboutSite] = useState(false);

    const switchToMe = () => {
        setAboutMe(true);
        setAboutSite(false);
    }

    const switchToSite = () => {
        setAboutSite(true);
        setAboutMe(false);
    }
    
    return (
        <Box sx={{mx: 12, my: 5}}>
            <Typography variant="h1">About</Typography>
            <Button onClick={switchToMe}>About Me</Button>
            <Button onClick={switchToSite}>About this website</Button>
            <Box display={'flex'} flexDirection={'row'} sx={{mt: 3}}>
                <Pics />
                <Zoom in={aboutMe} style={{ transitionDelay: aboutMe ? '200ms' : '0ms' }} mountOnEnter unmountOnExit>
                    {AboutMe}
                </Zoom>
                <Zoom in={aboutSite} style={{ transitionDelay: aboutSite ? '200ms' : '0ms' }} mountOnEnter unmountOnExit>
                    {AboutSite}
                </Zoom>
            </Box>
        </Box>
    )   
}



const AboutMe = (
    <Box sx={{mx: 30, my: 5}}>
        <Typography variant="h2">I am Dan</Typography>
        <Typography variant="body">
            I'm currently working at the Canada Revenue Agency's Applied Predictive Analytics Section as a Junior Data Scientist. 
            I've been picking up some web development as a hobby and building this blog/website to hone my skills and learn more cool 
            stuff about tech and economics, or whatever other topics I decide to work on.
        </Typography>
        
    </Box>
)

const AboutSite = (
    <Box sx={{mx: 30, my: 5}}>
        <Typography variant="h2">About this website</Typography>
        <Typography variant="h3">Technologies</Typography>
        <Typography variant="body1">
            The Front end of the website built with React, and I make heavy use of <NavLink to='https://mui.com/material-ui/getting-started/overview/'>Material UI</NavLink> for styling. 
            Material UI is a library containing a huge array of React Components which implement <NavLink to='https://m2.material.io/'>Google's Material Design</NavLink> UI and styling principles.
            The outline and Nav functionality was extended (read: shamelessly stolen) from their <NavLink to='https://mui.com/material-ui/getting-started/templates/dashboard/'>Dashboard</NavLink> example,
            though my implementation is soon to grow as the site expands.
        </Typography>
        <Typography variant="body1">
            The few data visualizations I've made thus far have been made using <NavLink to='https://recharts.org/en-US'>Recharts.</NavLink>
        </Typography>
        <Typography variant="body1">
            The back end is built using Flask and serves data from a Postgres Database.
        </Typography>
        <Typography variant="body1">
            All three services are hosted on <NavLink to='https://render.com/'>Render.</NavLink>
        </Typography>
        <Typography variant="h3">Design philosophy</Typography>
        <Typography variant="body1">
            For the purposes of <em>this website only, </em> some of the UI design or functionality that I implement might look and feel a little bit sloppy. This is not intentional per se, 
            however because this is something I'm doing from personal hobbying, I have decided to take a kind of 80/20 approach to building it: I want it to work and to look good, but when
            there is a feature or tweak that's going to take time that I don't view as proportional to the benefit from the site will get from it, I am not going to bother with it. 
            I only have so much free time and moving a div a few pixels to the left is not something I fancy spending that time on.
        </Typography>
    </Box>
)