import type { Metadata } from 'next';

import { Box, Typography } from '@mui/material';

import CreatePollForm from './components/CreatePollForm';

export const metadata: Metadata = {
  title: 'Create a Poll',
};

async function Create() {
  return (
    <Box>
      <Typography variant="h3">
        Complete the fields to create your Vote.
      </Typography>
      <CreatePollForm />
    </Box>
  );
}

export default Create;
