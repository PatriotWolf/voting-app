'use client';

import Image from 'next/image';

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Unstable_Grid2,
} from '@mui/material/index';

import MediaCard from './MediaCard';
import { Poll } from '.prisma/client';

interface Props {
  title: string;
  list: Poll[];
  isAdmin: boolean;
}

const VoteSection = ({ title, list, isAdmin }: Props) => {
  return (
    <>
      <Typography variant="h4">{title}</Typography>
      <Unstable_Grid2
        container
        rowSpacing={3}
        columnSpacing={3}
        sx={{ maxWidth: '1400px', flexGrow: 1, mt: 0.25 }}
      >
        {list.map((listElement, index) => {
          return (
            <Unstable_Grid2
              xs={12}
              md={6}
              lg={3}
              key={'main_card' + title + index}
            >
              <MediaCard
                title={listElement.title}
                description={listElement.description || ''}
              />
            </Unstable_Grid2>
          );
        })}

        {isAdmin && (
          <Unstable_Grid2 xs={12} md={6} lg={3} style={{ display: 'flex' }}>
            <Card
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <CardActionArea>
                <Image
                  alt="Random image"
                  priority
                  src="/download.png"
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
                    add {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Unstable_Grid2>
        )}
      </Unstable_Grid2>
    </>
  );
};

export default VoteSection;
