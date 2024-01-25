import { CastVoteParams } from './types';

export const castVote = async ({ pollId, pollOptionId }: CastVoteParams) => {
  const res = await fetch(`/api/vote/${pollId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pollId,
      pollOptionId,
    }),
  });

  return res.json();
};
