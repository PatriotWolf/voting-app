'use client';

import React, { useState } from 'react';

import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { drawerWidth } from 'app/dashboard/constants';

import DrawerContent from './components/Drawer';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const NarBar = ({ window }: Props) => {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          px: { lg: 20 },
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            color="inherit"
            variant="h4"
            underline="none"
            href="/#top"
            fontWeight={700}
          >
            {'Voting Dashboard'}
          </Link>

          <Box sx={{ flex: 1 }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant={isSmallScreen ? 'temporary' : 'permanent'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      </Box>
    </>
  );
};

export default NarBar;
