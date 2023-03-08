import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../../theme';

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  height: inherit; 
  border-radius: 7px;
  &.hover {  
    background-color: ${theme.palette.secondary.main};
  }
`