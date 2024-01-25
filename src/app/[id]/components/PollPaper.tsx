'use client';

import { Paper } from '@mui/material';
import { Prisma } from '@prisma/client';
import PollCard from 'app/components/PollCard';

import isPollFinished from 'utils/date';

import { CastVoteParams } from '../types';
import { castVote } from '../utils';

interface Props {
  vote: Prisma.PollGetPayload<{ include: { options: true } }>;
}
const PollPaper = ({ vote }: Props) => {
  const submitPoll = async (id: string) => {
    try {
      await castVote({ pollId: vote.id, pollOptionId: id });
    } catch (error) {}
  };
  return (
    <Paper
      sx={{
        p: 1,
      }}
    >
      <PollCard
        vote={vote}
        viewMode="functional"
        disabled={isPollFinished(vote.endsAt)}
        onVoteClick={voteChoosenId => submitPoll(voteChoosenId)}
      />
    </Paper>
  );
};

export default PollPaper;
