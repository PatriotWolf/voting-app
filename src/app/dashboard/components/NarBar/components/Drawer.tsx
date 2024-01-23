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
        <ListItemButton
          component="a"
          href={'/dashboard'}
          sx={{ textAlign: 'center' }}
        >
          <ListItemText primary={'List All Vote'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href={'/'} sx={{ textAlign: 'center' }}>
          <ListItemText primary={'Main Page'} />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

export default DrawerContent;
