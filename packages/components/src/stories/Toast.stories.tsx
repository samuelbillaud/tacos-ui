import type { Meta } from '@storybook/react';

import { XIcon } from 'lucide-react';

import { Button, IconButton, Toast } from '~/components';

const meta: Meta = {
  title: 'Components / Toast',
};

export default meta;

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
  duration: 5000,
});

export const Basic = () => {
  return (
    <>
      <Button
        onClick={() =>
          toaster.create({
            title: 'Toast Title',
            description: 'Toast Description',
            type: 'info',
          })
        }
        variant="outline"
      >
        Add Toast
      </Button>
      <Toast.Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.ActionTrigger asChild>
              <Button size="sm" variant="soft">
                Action
              </Button>
            </Toast.ActionTrigger>
            <Toast.CloseTrigger asChild>
              <IconButton size="sm" variant="outline">
                <XIcon />
              </IconButton>
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toast.Toaster>
    </>
  );
};
