'use client';

import { ChangeEvent, useState } from 'react';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Face, Security } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';

const LoginOption = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const onSubmit = async (isAdmin: boolean) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: isAdmin ? 'admin@admin.com' : 'user@test.com',
        password: isAdmin ? 'admin' : 'user',
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
      }
    } catch (error: any) {}
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Card sx={{ bgcolor: 'secondary.main', color: 'white' }}>
          <CardActionArea onClick={() => onSubmit(true)} sx={{ p: 2 }}>
            <Container>
              <Avatar
                alt="Profile Image"
                src={'#'}
                sx={{ width: 100, height: 100, bgcolor: 'primary.main' }}
              >
                <Security
                  sx={{
                    fontSize: 40,
                  }}
                />
              </Avatar>
            </Container>
            <Typography variant="h4">As Admin</Typography>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex' }}>
        <Card
          sx={{
            display: 'flex',
          }}
        >
          <CardActionArea
            onClick={() => onSubmit(false)}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              p: 2,
            }}
          >
            <Container>
              <Avatar
                alt="Profile Image"
                sx={{ width: 100, height: 100, bgcolor: blue[800] }}
              >
                <Face
                  sx={{
                    fontSize: 40,
                  }}
                />
              </Avatar>
            </Container>
            <Typography variant="h4">As User</Typography>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
export default LoginOption;
