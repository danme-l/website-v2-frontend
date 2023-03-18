import { Box, Grid, Paper, Typography, IconButton, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';
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
    const [showNotes, setShowNotes] = useState(null);
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

    const NotesBox = () => {
        if (curCountryID && curSubjectID) {
            return (
                <Zoom in={showNotes} style={{ transitionDelay: showNotes ? '200ms' : '0ms' }} mountOnEnter unmountOnExit>
                    <Paper elevation={3} sx={{m:2, p:2}}>
                        <Typography variant='body1'>{getSubjectById(curSubjectID, 'notes')}</Typography>
                        <Typography variant='h6'>Notes specific to {getCountryById(curCountryID)}</Typography>
                        <Typography variant='body1'>{getSeriesByIds(curCountryID, curSubjectID, 'notes')}</Typography>
                        <Typography variant='body1'>Estimations for this series begin in {getSeriesByIds(curCountryID, curSubjectID, 'estimates_start')}.</Typography>
                    </Paper>
                </Zoom>
            )
        } else {
            return (
                <Paper elevation={3} sx={{m:2, p:2}}>
                    <Typography variant='h6'>Use the drop down menus to pick options</Typography>
                </Paper>
            )
        }
    }

    const InfoBox = () => {
        return (
            <Zoom in={showInfo} mountOnEnter unmountOnExit>
                <Paper elevation={3} sx={{m:2, p:2}}>
                    <Typography variant='h6'>World Economic Outlook</Typography>
                    <Typography variant='body1'>
                        In October 2022, the International Monetary Fund released their World Economic Outlook Report. This page uses their dataset.
                    </Typography>
                    <Link to="https://www.imf.org/en/Publications/WEO/Issues/2022/10/11/world-economic-outlook-october-2022">Read that report here.</Link>
                </Paper>
            </Zoom>
        )
    }

    return (
        <Box sx={{my:2, mx: 4}}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant='h3'>{curCountryID ? getCountryById(curCountryID) : 'Select a country'}</Typography>
                    <Typography variant='h6'>{curSubjectID ? `${getSubjectById(curSubjectID, 'descriptor')} | ${getSubjectById(curSubjectID, 'units')}` : 'Select a category descriptor'}</Typography>
                </Grid>
                <Grid item xs={3} sx={{m:1}} display='flex' flexDirection={'row'}>
                    <Box>
                        <WeoMenu data={countries} handleSelect={handleCountrySelect} selectionKeys={{id: "country_id", value: "country", value2:null}} />
                        <WeoMenu data={subjects} handleSelect={handleSubjectSelect} selectionKeys={{id: "subject_id", value:"descriptor", value2: "units"}} />
                    </Box>
                    <IconButton onClick={() => setShowNotes(!showNotes)}>
                        <InfoIcon sx={{color: theme.palette.primary.main}} />
                        <Typography variant='body1'>IMF notes</Typography>
                    </IconButton>
                    <IconButton onClick={() => setShowInfo(!showInfo)}>
                        <InfoIcon sx={{color: theme.palette.primary.main}} />
                        <Typography variant='body1'>What am I looking at?</Typography>
                    </IconButton>
                </Grid>
                <Grid item xs={11} sx={{mr:20}}>
                    {curCountryID && curSubjectID ? <WeoLineChart data={series} estimates_start={getSeriesByIds(curCountryID, curSubjectID, 'estimates_start')} /> : null}
                </Grid>
                <Grid item xs={4}>
                    <NotesBox />
                    <InfoBox />
                </Grid>
            </Grid>            
        </Box>
    )
}