import React from 'react';

import { AppProps } from 'next/app';

import { Box, Grid, Paper, Typography } from '@mui/material/index';

import { auth } from 'utils/auth';

import LoginForm from './components/LoginForm';
import LoginOption from './components/LoginOption';

const LoginPage = async ({ pageProps }: AppProps) => {
  const session = await auth();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        bgcolor: 'primary.main',
        flexGrow: 1,
      }}
    >
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Paper
          elevation={1}
          sx={{ p: 2, maxWidth: { xs: '100vw', lg: '800px' } }}
        >
          <div>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* <LoginForm /> */}
            <LoginOption />
          </div>
        </Paper>
      </Grid>
    </Box>
  );
};
export default LoginPage;
