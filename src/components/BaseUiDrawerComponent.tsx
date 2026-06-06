import React from 'react';
import { Drawer } from '@base-ui/react/drawer';
import { DrawerContent } from './DrawerContent';

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  complexity: 'light' | 'medium' | 'heavy';
}

export const BaseUiDrawerComponent: React.FC<DrawerProps> = ({ open, onOpenChange, complexity }) => {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Viewport className="base-ui-viewport">
          <Drawer.Backdrop className="base-ui-backdrop" />
          <Drawer.Popup className="base-ui-popup" id="base-ui-popup-element">
            <Drawer.Content className="base-ui-content">
              <DrawerContent complexity={complexity} onClose={() => onOpenChange(false)} />
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
