'use client';

import { signIn, signOut } from 'next-auth/react';

import { Button } from '@mui/material';

export const LoginButton = () => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => signIn(undefined, { callbackUrl: '/' })}
    >
      Sign in
    </Button>
  );
};

export const LogoutButton = () => {
  return (
    <Button variant="contained" color="secondary" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};
