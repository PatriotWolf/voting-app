import { Quicksand } from 'next/font/google';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const quicksand = Quicksand({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#B22222' },
    secondary: { main: '#1F1F1F' },
  },
  typography: {
    fontFamily: `${quicksand.style.fontFamily}`,
  },
});

export default responsiveFontSizes(theme);
