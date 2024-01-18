import React from 'react';

import Image from 'next/image';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Category } from 'app/types';

const MediaCard = ({ title, description }: Category) => {
  return (
    <Card>
      <Image
        alt="Random image"
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
      <CardActions>
        <Button size="small" variant="contained">
          Go
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
