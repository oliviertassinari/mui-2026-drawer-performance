import React from 'react';
import { SwipeableDrawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';

interface DrawerProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  complexity: 'light' | 'medium' | 'heavy';
}

export const MuiDrawerComponent: React.FC<DrawerProps> = ({ open, onOpen, onClose, complexity }) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      disableBackdropTransition={false}
      disableDiscovery={false}
      slotProps={{
        paper: {
          className: 'mui-drawer-paper',
          id: 'mui-drawer-paper-element',
          sx: {
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            backgroundColor: '#1a1a1a',
            color: '#f3f4f6',
            maxWidth: '600px',
            width: '100%',
            mx: 'auto',
            boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: 'none',
            height: complexity === 'heavy' ? '85vh' : 'auto',
            maxHeight: '85vh',
          }
        }
      }}
    >
      <DrawerContent complexity={complexity} onClose={onClose} />
    </SwipeableDrawer>
  );
};
