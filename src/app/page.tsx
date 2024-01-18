import React from 'react';

import { Box, Grid, Typography } from '@mui/material/index';

import VoteSection from './components/VoteSection';
import { catergories, events } from './constants';

const HomePage = () => {
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
    </Box>
  );
};
export default HomePage;
