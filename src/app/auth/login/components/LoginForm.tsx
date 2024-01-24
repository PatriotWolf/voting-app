'use client';

import { ChangeEvent, useState } from 'react';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

const LoginForm = () => {
  const router = useRouter();
  const [account, setAccount] = useState({ email: '', password: '' });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const handleAccount = (
    property: 'email' | 'password',
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;
    setAccount(accountCopy);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setAccount({ email: '', password: '' });

      const res = await signIn('credentials', {
        redirect: false,
        email: account.email,
        password: account.password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
      }
    } catch (error: any) {}
  };
  return (
    <form noValidate onSubmit={onSubmit}>
      <TextField
        onChange={event => handleAccount('email', event)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoFocus
      />
      <TextField
        onChange={event => handleAccount('password', event)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
};
export default LoginForm;
