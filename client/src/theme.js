import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f7f8fa", 
    },
  },
  typography: {
   fontFamily: '"Pacifico", cursive',
    fontWeightBold: 700,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        },
      },
    },
  },
});

export default theme;
