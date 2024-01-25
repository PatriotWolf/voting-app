import React from 'react';

import { notFound, redirect } from 'next/navigation';

import { Box, Paper } from '@mui/material/index';
import PollCard from 'app/components/PollCard';
import { isAdminSession } from 'app/constants';
import { db } from 'lib/db';

import { auth } from 'utils/auth';

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
        flexDirection: 'row',
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
        }}
      >
        <Paper
          sx={{
            p: 1,
          }}
        >
          <PollCard vote={vote} viewMode="functional" />
        </Paper>
      </Box>
    </Box>
  );
};
export default VoteDetailPage;
