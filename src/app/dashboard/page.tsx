import React from 'react';

import { redirect } from 'next/navigation';

import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material/index';
import { isAdminSession } from 'app/constants';
import { db } from 'lib/db';

import { auth } from 'utils/auth';

async function getVote() {
  const book = await db.poll.findMany({});
  return book;
}

const DashboardPage = async () => {
  const session = await auth();
  const isAdmin = isAdminSession(session);
  if (session && !isAdmin) {
    redirect('/');
  }
  const votes = await getVote();
  return (
    <>
      <Typography variant="h3">This is dashboard page for admin</Typography>
      <Typography variant="h6">Vote</Typography>
      <List>
        {votes.map(vote => (
          <ListItem disablePadding key={'Vote_List' + vote.id}>
            <ListItemButton
              component="a"
              href={'/dashboard/' + vote.id}
              sx={{}}
            >
              <ListItemText
                primary={vote.title}
                about={vote.description || undefined}
              />
              <ListItemText primary={vote.createdAt.toDateString()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button component="a" href={'/dashboard/create'}>
        Add Vote
      </Button>
    </>
  );
};

export default DashboardPage;
