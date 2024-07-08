import { Button, Collapsible } from '@tacos-ui/react';

import { Box } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: Collapsible.RootProps) => {
  return (
    <Collapsible.Root defaultOpen {...props}>
      <Collapsible.Trigger asChild>
        <Button variant="outline">Toggle</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box bg="accent.default" borderRadius="l3" color="accent.fg" mt="3" p="4">
          Content
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
