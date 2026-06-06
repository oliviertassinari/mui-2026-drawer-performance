import React from 'react';
import { Sheet } from '@silk-hq/components';
import { DrawerContent } from './DrawerContent';
import '@silk-hq/components/layered-styles.css';

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  complexity: 'light' | 'medium' | 'heavy';
}

export const SilkDrawerComponent: React.FC<DrawerProps> = ({ open, onOpenChange, complexity }) => {
  return (
    <Sheet.Root presented={open} onPresentedChange={onOpenChange} license="non-commercial">
      <Sheet.Portal>
        <Sheet.View 
          nativeEdgeSwipePrevention={true}
          id="silk-drawer-view-element"
        >
          <Sheet.Backdrop themeColorDimming="auto" />
          <Sheet.Content className="silk-sheet-content">
            <Sheet.BleedingBackground className="silk-bleeding-bg" />
            <DrawerContent complexity={complexity} onClose={() => onOpenChange(false)} />
          </Sheet.Content>
        </Sheet.View>
      </Sheet.Portal>
    </Sheet.Root>
  );
};
