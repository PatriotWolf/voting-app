import React from 'react';

import { redirect } from 'next/navigation';

import { Typography } from '@mui/material/index';

import { auth } from 'utils/auth';

import MainMenu from './components/MainBox';

const DashboardPage = async () => {
  const session = await auth();
  if (session && !session.user.isAdmin) {
    redirect('/');
  }
  return (
    <MainMenu>
      <Typography>This is dashboard page for admin</Typography>
    </MainMenu>
  );
};

export default DashboardPage;
