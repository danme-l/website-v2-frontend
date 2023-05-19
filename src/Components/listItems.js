import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { Button } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EditIcon from '@mui/icons-material/Edit';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../theme';

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.palette.secondary};
  height: inherit; 
  border-radius: 7px;
  &.hover {  
    background-color: ${theme.palette.primary.dark};
  }
`


export const mainListItems = (
  <React.Fragment>
    {/* HOME */}
    <CustomNavLink to='home'>
      <ListItemButton sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </CustomNavLink>
    {/* ANALYTICS */}
    <CustomNavLink to='analytics'>
      <ListItemButton sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
        <ListItemIcon>
          <AnalyticsIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItemButton>
    </CustomNavLink>
    {/* BLOG */}
    <CustomNavLink to='blog'>
      <ListItemButton sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
    </CustomNavLink>
    {/* ABOUT */}
    <CustomNavLink to='about'>
      <ListItemButton sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>
    </CustomNavLink>
    {/* CONTACT */}
    <CustomNavLink to='contact'>
      <ListItemButton sx={{ "&:hover": { backgroundColor: `${theme.palette.secondary.main}`} }}>
        <ListItemIcon>
          <ContactPageIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItemButton>
    </CustomNavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      More items
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Another thing" />
    </ListItemButton>
   </React.Fragment>
);