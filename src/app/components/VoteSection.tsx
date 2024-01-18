import { Typography, Unstable_Grid2 } from '@mui/material/index';
import { CardProps } from 'app/types';

import MediaCard from './MediaCard';

interface Props {
  title: string;
  list: CardProps[];
}

const VoteSection = ({ title, list }: Props) => {
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
                description={listElement.description}
              />
            </Unstable_Grid2>
          );
        })}
      </Unstable_Grid2>
    </>
  );
};

export default VoteSection;
