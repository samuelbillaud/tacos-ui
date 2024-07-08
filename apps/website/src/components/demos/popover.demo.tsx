import { Button, IconButton, Popover } from '@tacos-ui/react';
import { XIcon } from 'lucide-react';

import { Box, Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: Popover.RootProps) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Stack gap="1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </Stack>
          <Box position="absolute" right="1" top="1">
            <Popover.CloseTrigger asChild>
              <IconButton aria-label="Close Popover" size="sm" variant="ghost">
                <XIcon />
              </IconButton>
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
