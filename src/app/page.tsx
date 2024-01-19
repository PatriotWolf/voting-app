import React from 'react';

import { Box, ButtonGroup, Grid, Typography } from '@mui/material/index';

import { auth } from 'utils/auth';

import { LoginButton, LogoutButton } from './components/ButtonLogin';
import VoteSection from './components/VoteSection';
import { catergories, events } from './constants';

const HomePage = async () => {
  const session = await auth();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" textAlign={'center'}>
        Voting App
      </Typography>
      <Typography variant="h2" textAlign={'center'}>
        {JSON.stringify(session?.user)}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        sx={{
          p: 2,
          mt: 2,
          px: { xs: 0, md: 20 },
          display: 'flex',
        }}
      >
        <Grid item xs={12}>
          <VoteSection title="Category" list={catergories} />
        </Grid>
        <Grid item xs={12}>
          <VoteSection title="Event" list={events} />
        </Grid>
      </Grid>

      {session ? <LogoutButton /> : <LoginButton />}
    </Box>
  );
};
export default HomePage;
