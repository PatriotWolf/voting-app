import React from 'react';

import { Box, Button, Grid, Typography } from '@mui/material/index';
import { db } from 'lib/db';

import { auth } from 'utils/auth';

import { LoginButton, LogoutButton } from './components/ButtonLogin';
import VoteSection from './components/VoteSection';
import { isAdminSession } from './constants';

async function getVote() {
  const book = await db.poll.findMany({});
  return book;
}
const HomePage = async () => {
  const session = await auth();
  const isAdmin = isAdminSession(session);
  const votes = await getVote();
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1,
        flexDirection: 'column',
        bgcolor: 'primary.main',
        color: 'common.white',
      }}
    >
      <Typography
        variant="h2"
        textAlign={'center'}
        sx={{
          pt: 4,
        }}
      >
        Voting App
      </Typography>
      {isAdmin && (
        <Box textAlign="center">
          <Button
            href="/dashboard"
            variant="contained"
            color="secondary"
            fullWidth={false}
          >
            Take me to dashboard
          </Button>
        </Box>
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
          {votes && (
            <VoteSection title="Active Vote" list={votes} isAdmin={isAdmin} />
          )}
        </Grid>
      </Grid>

      {session ? <LogoutButton /> : <LoginButton />}
    </Box>
  );
};
export default HomePage;
