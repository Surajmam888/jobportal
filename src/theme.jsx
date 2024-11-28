import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f4f6f8',  
    },
    text: {
      primary: '#333333',  
      secondary: '#777777', 
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#333333',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#333333',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#555555', 
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', 
          padding: '10px 20px',  
        },
        containedPrimary: {
          backgroundColor: '#1976d2', 
          '&:hover': {
            backgroundColor: '#1565c0',  
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          body1: 'p',
        },
      },
    },
  },
});

export default theme;
