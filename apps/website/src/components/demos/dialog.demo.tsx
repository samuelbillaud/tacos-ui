import { Button, Dialog, IconButton } from '@tacos-ui/react';
import { XIcon } from 'lucide-react';

import { Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: Dialog.RootProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </Stack>
            <Stack direction="row" gap="3" width="full">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline" width="full">
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button width="full">Confirm</Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" right="2" top="2">
            <IconButton aria-label="Close Dialog" size="sm" variant="ghost">
              <XIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
