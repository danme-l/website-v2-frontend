import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import useCountries from './Hooks/useCountries';
import useSubjects from './Hooks/useSubjects';
import useSeriesWithCache from './Hooks/useSeriesWithCache';
import WeoMenu from './Utils/WeoMenu';
import WeoLineChart from './Charts/WeoLineChart';
import { useTheme } from '@mui/material/styles';

export const WeoDashboard = () => {
    const [curCountryID, setCurCountryID] = useState(null);
    const [curSubjectID, setCurSubjectID] = useState(null);
    const [showInfo, setShowInfo] = useState(null);
    const countries = useCountries();
    const subjects = useSubjects();
    const series = useSeriesWithCache(curCountryID, curSubjectID);  // cache the series data based on current countryId and subjectId
    const theme = useTheme();
    
    const handleCountrySelect = (curCountryID) => {
        setCurCountryID(curCountryID);
    }

    const handleSubjectSelect = (curSubjectID) => {
        setCurSubjectID(curSubjectID)
    }

    function getCountryById(id) {
        const c = countries.find(c => c.country_id === id)
        return c ? c.country : null;
    }

    function getSubjectById(id, field) {
        const s = subjects.find(s => s.subject_id === id)
        return s ? s[field] : null;
    }

    function getSeriesByIds(countryId, subjectId, field) {
        const s = series.find(s => s.subject_id === subjectId && s.country_id === countryId)
        return s ? s[field] : null;
    }
    
    return (
        <Box>
            <Grid container>
                <Grid item xs={3} sx={{m:1}}>
                    <WeoMenu data={countries} handleSelect={handleCountrySelect} selectionKeys={{id: "country_id", value: "country"}} />
                    <WeoMenu data={subjects} handleSelect={handleSubjectSelect} selectionKeys={{id: "subject_id", value:"descriptor"}} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h3'>{curCountryID ? getCountryById(curCountryID) : 'Select a country'}</Typography>
                    <Typography variant='h6'>{curSubjectID ? `${getSubjectById(curSubjectID, 'descriptor')} | ${getSubjectById(curSubjectID, 'units')}` : 'Select a category descriptor'}</Typography>
                </Grid>
                <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <IconButton onClick={() => setShowInfo(!showInfo)}>
                        <InfoIcon sx={{color: theme.palette.primary.main}} />
                        <Typography variant='body1'>IMF notes</Typography>
                    </IconButton>
                </Grid>
                <Grid item xs={8}>
                    {curCountryID && curSubjectID ? <WeoLineChart data={series} estimates_start={getSeriesByIds(curCountryID, curSubjectID, 'estimates_start')} /> : null}
                </Grid>
                <Grid item xs={4}>
                    {showInfo && 
                    <Paper elevation={3} sx={{m:2, p:2}}>
                        <Typography variant='body1'>{getSubjectById(curSubjectID, 'notes')}</Typography>
                        <Typography variant='h6'>Notes specific to {getCountryById(curCountryID)}</Typography>
                        <Typography variant='body1'>{getSeriesByIds(curCountryID, curSubjectID, 'notes')}</Typography>
                        <Typography variant='body1'>Estimations for this series begin in {getSeriesByIds(curCountryID, curSubjectID, 'estimates_start')}.</Typography>
                    </Paper>}
                </Grid>
            </Grid>            
        </Box>
    )
}