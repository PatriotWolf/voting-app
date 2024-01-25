import React from 'react';

import { redirect } from 'next/navigation';

import {
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
      <Typography variant="h3">Welcome dear admin!</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Ends at</TableCell>
              <TableCell align="right">Total Vote</TableCell>
              <TableCell align="right">Last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {votes.map(vote => (
              <TableRow
                key={'Vote_List' + vote.id}
                component={Link}
                href={`/dashboard/${vote.id}/`}
                underline="none"
                hover
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {vote.title}
                </TableCell>
                <TableCell align="right">
                  {vote.endsAt.toDateString()}
                </TableCell>
                <TableCell align="right">{vote.totalCount}</TableCell>
                <TableCell align="right">
                  {vote.updatedAt.toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button component="a" href={'/dashboard/create'}>
        Add Vote
      </Button>
    </>
  );
};

export default DashboardPage;
