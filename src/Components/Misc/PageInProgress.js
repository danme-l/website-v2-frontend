import React, {useState, useEffect} from 'react';
import { Typography, Paper } from '@mui/material';  

const PageInProgress = (props) => {
    const [name, setName] = useState('');

    useEffect(() => {
        setName(props.pageName)
    })
    
    return (
        <Paper elevation={3} sx={{m: 4, p: 4}}>
            <Typography variant='h2'>{name}</Typography>
            <Typography variant='h4'> This section is a work in progress.</Typography>
        </Paper>
    )
    
}
  
export default PageInProgress;