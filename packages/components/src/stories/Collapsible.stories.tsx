import type { Meta } from '@storybook/react';

import { Box } from '@tacos-ui/styled-system/jsx';

import { Button, Collapsible } from '~/components';

const meta: Meta = {
  title: 'Components/Collapsible',
};

export default meta;

export const Basic = () => (
  <Collapsible.Root gap="3">
    <Collapsible.Trigger asChild>
      <Button variant="outline">Toggle</Button>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Box bg="accent.default" borderRadius="md" color="accent.fg" p="4" width="sm">
        Content
      </Box>
    </Collapsible.Content>
  </Collapsible.Root>
);
