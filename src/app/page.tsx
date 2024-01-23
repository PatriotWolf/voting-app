import React from 'react';

import { Box, ButtonGroup, Grid, Typography } from '@mui/material/index';

import { auth } from 'utils/auth';

import { LoginButton, LogoutButton } from './components/ButtonLogin';
import VoteSection from './components/VoteSection';
import { catergories, events, isAdminSession } from './constants';

const HomePage = async () => {
  const session = await auth();
  const isAdmin = isAdminSession(session);
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h2"
        textAlign={'center'}
        sx={{
          pt: 2,
        }}
      >
        Voting App
      </Typography>
      {isAdmin && (
        <Typography
          variant="h2"
          component="a"
          href="/dashboard"
          textAlign={'center'}
        >
          Take me to dashboard
        </Typography>
      )}
      <Grid
        container
        rowSpacing={2}
        sx={{
          p: 2,
          mt: 2,
          px: { xs: 3, md: 20 },
          display: 'flex',
          overflowY: 'scroll',
          flexGrow: 1,
        }}
      >
        <Grid item xs={12}>
          <VoteSection title="Category" list={catergories} isAdmin={isAdmin} />
        </Grid>
        <Grid item xs={12}>
          <VoteSection title="Event" list={events} isAdmin={isAdmin} />
        </Grid>
      </Grid>

      {session ? <LogoutButton /> : <LoginButton />}
    </Box>
  );
};
export default HomePage;
