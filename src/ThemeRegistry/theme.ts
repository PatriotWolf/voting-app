import { Quicksand } from 'next/font/google';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const quicksand = Quicksand({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          scrollbarWidth: 5,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#fff0',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#fff',
            minHeight: 24,
            width: 2,
            border: '1px solid #2b2b2b',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
        },
      },
    },
  },
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
