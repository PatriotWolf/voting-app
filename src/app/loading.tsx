import React from 'react';

import { Box, Typography } from '@mui/material/index';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: 'primary.main',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        Loading
      </Typography>
    </Box>
  );
};
export default Loading;
