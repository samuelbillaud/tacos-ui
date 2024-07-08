import { Button, IconButton, Toast } from '@tacos-ui/react';
import { XIcon } from 'lucide-react';

const toaster = Toast.createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
});

export const Demo = () => (
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
            <Button size="sm" variant="link">
              Action
            </Button>
          </Toast.ActionTrigger>
          <Toast.CloseTrigger asChild>
            <IconButton size="sm" variant="link">
              <XIcon />
            </IconButton>
          </Toast.CloseTrigger>
        </Toast.Root>
      )}
    </Toast.Toaster>
  </>
);
