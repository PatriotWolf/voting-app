'use client';

// Error components must be Client Components
import React from 'react';

import { Box, Button, Typography } from '@mui/material/index';

interface Props {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: 'primary.main',
        gap: 1,
      }}
    >
      <Typography variant="h2" style={{ color: 'white' }}>
        Something went wrong!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
