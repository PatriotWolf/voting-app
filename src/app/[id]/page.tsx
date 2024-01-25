import React from 'react';

import { notFound, redirect } from 'next/navigation';

import { Alert, AlertTitle, Box, Typography } from '@mui/material/index';
import { isAdminSession } from 'app/constants';
import { db } from 'lib/db';

import { auth } from 'utils/auth';
import isPollFinished from 'utils/date';

import PollPaper from './components/PollPaper';

interface PageProps {
  params: {
    id: string;
  };
}
async function getVote(id: string) {
  const poll = await db.poll.findUnique({
    where: { id },
    include: {
      options: true,
    },
  });
  return poll;
}

const VoteDetailPage = async ({ params: { id } }: PageProps) => {
  const session = await auth();
  const isAdmin = isAdminSession(session);
  if (session && isAdmin) {
    redirect(`/dashboard/${id}`);
  }

  const vote = await getVote(id);

  if (!vote) notFound();

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1,
        bgcolor: 'primary.main',
        color: 'common.white',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          width: {
            xs: '100%',
            md: '600px',
          },
          gap: 4,
        }}
      >
        {isPollFinished(vote.endsAt) && (
          <Alert severity="error">
            <AlertTitle>OPPSSS</AlertTitle>
            <Typography>The Poll has ended!</Typography>
          </Alert>
        )}
        <PollPaper vote={vote} />
      </Box>
    </Box>
  );
};
export default VoteDetailPage;
