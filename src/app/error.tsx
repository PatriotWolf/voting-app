'use client';

// Error components must be Client Components
import React from 'react';

import { Box, Button, Typography } from '@mui/material/index';

interface Props {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: Props) {
  console.log(error);
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
      <Typography variant="h2">Something went wrong!</Typography>
      <Button
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
