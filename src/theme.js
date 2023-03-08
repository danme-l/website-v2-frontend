import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        // textIndent: 20,
        textAlign: 'left',
      }
    },
    palette: {
      primary: {
        light: '#009BF4',
        main: '#005689',
      },
      secondary: {
        main: '#ff895d',
      },
      tertiary: {
        light: '#c8fedb',
        main: '#97cba9',
        dark: '#689a7a'
      },
    },
  });
  
  export default theme;
  