import React from 'react';
import { Drawer } from 'vaul';
import { DrawerContent } from './DrawerContent';

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  complexity: 'light' | 'medium' | 'heavy';
}

export const VaulDrawerComponent: React.FC<DrawerProps> = ({ open, onOpenChange, complexity }) => {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="vaul-overlay" />
        <Drawer.Content className="vaul-content" id="vaul-content-element">
          <DrawerContent complexity={complexity} onClose={() => onOpenChange(false)} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
