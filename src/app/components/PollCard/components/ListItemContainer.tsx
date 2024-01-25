import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { PollOption } from '@prisma/client';

interface Props {
  option: PollOption;
  viewMode: 'display' | 'functional';
  disabled: boolean;
  onClick?: () => void;
}

const ListItemContainer = ({ option, viewMode, disabled, onClick }: Props) => {
  return (
    <ListItem>
      {viewMode === 'display' ? (
        <ListItemText
          color="primary"
          primary={option.text}
          secondary={'Total: ' + option.totalCount}
          secondaryTypographyProps={{
            color: 'common.white',
          }}
          sx={{
            bgcolor: 'secondary.main',
            border: '2px solid',
            borderRadius: 3,
            p: 2,
            color: 'common.white',
          }}
        />
      ) : (
        <ListItemButton
          disabled={disabled}
          onClick={onClick}
          sx={{
            border: '2px solid',
            borderRadius: 3,
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor: 'secondary.main',
          }}
        >
          <ListItemText
            color="primary"
            primary={option.text}
            sx={{ flexGrow: 1 }}
          />
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default ListItemContainer;
