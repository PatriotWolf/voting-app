import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';

const DrawerContent = () => (
  <Box sx={{ textAlign: 'center' }}>
    <Toolbar />

    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href={'/'} sx={{ textAlign: 'center' }}>
          <ListItemText primary={'See main page'} />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

export default DrawerContent;
