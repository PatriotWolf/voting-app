'use client';

import { useRouter } from 'next/navigation';

import { Delete, Edit } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import { deletePoll } from '../utils';

interface Props {
  pollId: string;
}
const PollActionButton = ({ pollId }: Props) => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      const id = await deletePoll(pollId);

      router.push(`/dashboard`);
    } catch (error) {}
  };

  return (
    <Box
      component="div"
      sx={{
        mt: 3,
      }}
    >
      <Button variant="contained" startIcon={<Delete />} onClick={onDelete}>
        Delete
      </Button>
      <Button
        variant="contained"
        href={`/dashboard/${pollId}/update`}
        startIcon={<Edit />}
      >
        Update
      </Button>
    </Box>
  );
};

export default PollActionButton;
