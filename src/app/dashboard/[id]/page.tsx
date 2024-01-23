import { notFound } from 'next/navigation';

import { Typography } from '@mui/material/index';
import PollCard from 'app/components/PollCard';
import { db } from 'lib/db';

interface PageProps {
  params: {
    slug: string;
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

const BookDetailsPage = async ({ params: { slug } }: PageProps) => {
  const poll = await getPoll(slug);

  if (!poll) notFound();

  return (
    <>
      <Typography variant="h3">
        Vote view for &ldquo;{poll.title}&rdquo;
      </Typography>
      <PollCard vote={poll} viewMode="display" />
    </>
  );
};

export default BookDetailsPage;
