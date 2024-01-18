'use client';

import React from 'react';

import Image from 'next/image';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardProps } from 'app/types';

const MediaCard = ({ title, description }: CardProps) => {
  return (
    <Card>
      <CardActionArea>
        <Image
          alt="Random image"
          priority
          src="https://source.unsplash.com/random"
          width={640}
          height={480}
          style={{
            maxWidth: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
