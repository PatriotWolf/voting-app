import { notFound } from 'next/navigation';

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
    <div className="sm:px-4">
      <h1 className="mx-auto my-12 max-w-xl px-4 text-center text-2xl font-semibold leading-tight">
        Complete the fields to create your poll.
      </h1>
      <UpdatePollForm defaultPoll={poll} />
    </div>
  );
};

export default UpdatePollPage;
