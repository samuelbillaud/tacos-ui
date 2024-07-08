import type { PropsWithChildren } from 'react';

import { Portal } from '@ark-ui/react/portal';
import { Drawer, IconButton } from '@tacos-ui/react';
import { MenuIcon, XIcon } from 'lucide-react';

import { Logo } from '../logo';

export const MobileSidebarContainer = ({ children }: PropsWithChildren) => (
  <Drawer.Root lazyMount unmountOnExit variant="left">
    <Drawer.Trigger asChild>
      <IconButton aria-label="Open Menu" size="sm" variant="ghost">
        <MenuIcon />
      </IconButton>
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header pt="5">
            <a aria-label="Go to start page" href="/">
              <Logo />
            </a>
            <Drawer.CloseTrigger asChild position="absolute">
              <IconButton aria-label="Close Sidebar" right="4" top="3" variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{children}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
);
