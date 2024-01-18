import React from 'react';

import { Box, Paper, Typography, Unstable_Grid2 } from '@mui/material/index';

import MediaCard from './components/MediaCard';
import { catergories } from './constants';

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
      <Paper
        elevation={10}
        sx={{
          p: 2,
          mt: 2,
          mx: { xs: 0, md: 20 },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Unstable_Grid2
          container
          rowSpacing={3}
          columnSpacing={3}
          sx={{ maxWidth: '1400px', flexGrow: 1 }}
        >
          {catergories.map((category, index) => {
            return (
              <Unstable_Grid2 xs={12} md={6} lg={3} key={'main_card' + index}>
                <MediaCard
                  title={category.title}
                  description={category.description}
                />
              </Unstable_Grid2>
            );
          })}
        </Unstable_Grid2>
      </Paper>
    </Box>
  );
};
export default HomePage;
