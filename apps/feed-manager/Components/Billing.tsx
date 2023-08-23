import { Button, ThemeProvider } from '@mui/material';
import theme from 'stableHost/theme';

const Billing = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        This is feed manager billing page.
        <Button variant="contained">My Button</Button>
      </div>
    </ThemeProvider>
  );
};

export default Billing;
