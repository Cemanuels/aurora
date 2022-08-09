import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    text: {
      secondary: '#232323',
    },
    background: {
      default: '#DBDCDF',
      paper: '#EFF0F4',
    },
    secondary: {
      main: '#1F50FF'
    }
  },

  typography: {
    fontFamily: 'Open Sans',
    button: {
      fontSize: '20px',
      lineHeight: '25px',
      fontStyle: 'normal',
      fontWeight: 400,
    },
  },
});
