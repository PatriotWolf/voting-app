'use client';

import React from 'react';

import Image from 'next/image';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import { CardProps } from 'app/types';

const MediaCard = ({ title, description }: CardProps) => {
  return (
    <Card>
      <CardActionArea
        sx={{
          bgcolor: 'secondary.main',
          color: 'common.white',
        }}
      >
        <Image
          alt="Random image"
          priority
          src="/vote-card-image.avif"
          width={640}
          height={480}
          style={{
            backgroundColor: orange[500],
            width: '100%',
            height: '200px',
            objectFit: 'contain',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.main">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
