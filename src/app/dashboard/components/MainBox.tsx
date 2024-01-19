'use client';

import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import { drawerWidth } from '../constants';

interface Props {
  children: React.ReactElement;
}
const MainMenu = ({ children }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      component="main"
      sx={{
        marginLeft: `${isSmallScreen ? 0 : drawerWidth}px`,
        display: 'flex',

        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <Toolbar />
      {children}
    </Box>
  );
};

export default MainMenu;
