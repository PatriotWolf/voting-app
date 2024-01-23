import { notFound } from 'next/navigation';

import { Typography } from '@mui/material/index';
import PollCard from 'app/components/PollCard';
import { db } from 'lib/db';

import PollActionButton from './components/PollActionButton';

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

const PollDetailsPage = async ({ params: { id } }: PageProps) => {
  const poll = await getPoll(id);

  if (!poll) notFound();
  return (
    <>
      <Typography variant="h3">
        Vote view for &ldquo;{poll.title}&rdquo;
      </Typography>
      <PollCard vote={poll} viewMode="display" />
      <PollActionButton pollId={poll.id} />
    </>
  );
};

export default PollDetailsPage;
