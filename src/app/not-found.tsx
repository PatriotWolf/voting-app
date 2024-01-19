import React from 'react';

import { Box, Typography } from '@mui/material/index';

const Custom404 = () => {
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
        404
      </Typography>
    </Box>
  );
};
export default Custom404;
