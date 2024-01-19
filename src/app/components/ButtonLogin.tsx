'use client';

import { signIn, signOut } from 'next-auth/react';

import { Button } from '@mui/material';

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn(undefined, { callbackUrl: '/' })}>
      Sign in
    </Button>
  );
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
