import { notFound } from 'next/navigation';

import { Box, Typography } from '@mui/material/index';
import { db } from 'lib/db';

import UpdatePollForm from './components/UpdatePollForm';

interface PageProps {
  params: {
    id: string;
  };
}
async function getPoll(id: string) {
  const poll = await db.poll.findFirst({
    where: { id },
    include: {
      options: true,
    },
  });
  return poll;
}

const UpdatePollPage = async ({ params: { id } }: PageProps) => {
  const poll = await getPoll(id);

  if (!poll) notFound();

  return (
    <Box>
      <Typography variant="h3">Poll Update For {poll.title}.</Typography>
      <UpdatePollForm defaultPoll={poll} />
    </Box>
  );
};

export default UpdatePollPage;
