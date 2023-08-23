import { createTheme } from '@mui/material';
const defaultTheme = createTheme();

export const materialTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#ff1fe5',
      dark: '#44ff1f',
      light: '#1fffd2',
    },
  },
});

export default materialTheme;
