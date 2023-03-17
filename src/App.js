import * as React from 'react';
import { BrowserRouter, Routes, Route, withRouter } from 'react-router-dom';

// mui imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// my imports
import { Nav } from './Components/Nav';
import { HomePage } from './Components/HomePage';
import theme from './theme';
import PageNotFound from './Components/Misc/PageNotFound';
import PageInProgress from './Components/Misc/PageInProgress';
import { HouseholdDebt } from './Components/Posts/Household_Debt/Household_Debt';
import { WeoDashboard } from './Components/Posts/World Economic Outlook/WeoDashboard';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <BrowserRouter>
          <Nav />
          <Box
            sx={{
              // TODO darkmode
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Routes>
              <Route name="home" path="/" element={<HomePage />} />
              <Route name="home" path="/Home" element={<HomePage />} />
              <Route name="household_debt" path='/household_debt' element={<HouseholdDebt />} /> 
              <Route name="world_econ_outlook" path='/world_econ_outlook' element={<WeoDashboard />} /> 
              <Route name="posts" path="/posts" element={<PageInProgress pageName={'Posts'} />} />
              <Route name="about" path="/about" element={<About />} />
              <Route name="contact" path="/contact" element={<Contact />} />
              <Route name="404" path='*' element={<PageNotFound />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
