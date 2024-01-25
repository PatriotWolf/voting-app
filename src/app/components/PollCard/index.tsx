'use client';

import { Card, CardContent, List, Typography } from '@mui/material';
import { Prisma } from '@prisma/client';

import ListItemContainer from './components/ListItemContainer';

interface Props {
  vote: Prisma.PollGetPayload<{ include: { options: true } }>;
  viewMode: 'display' | 'functional';
  disabled?: boolean;
  onVoteClick?: (voteChoosenId: string) => void;
}

const PollCard = ({
  vote,
  viewMode = 'display',
  disabled = false,
  onVoteClick,
}: Props) => {
  return (
    <Card>
      <CardContent
        sx={{ bgcolor: 'primary.main', color: 'common.white', p: 2 }}
      >
        <Typography variant="h3" textAlign={'center'}>
          {vote.title}
        </Typography>{' '}
        <List sx={{ mt: 1 }}>
          {vote.options.map(option => (
            <ListItemContainer
              key={vote.id + '' + option.id}
              option={option}
              viewMode={viewMode}
              disabled={disabled}
              onClick={() => onVoteClick && onVoteClick(option.id)}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PollCard;
