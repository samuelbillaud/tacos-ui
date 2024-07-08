import { Button, Card, FormLabel, Input } from '@tacos-ui/react';

import { Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: Card.RootProps) => {
  return (
    <Card.Root width="sm" {...props}>
      <Card.Header>
        <Card.Title>Team Members</Card.Title>
        <Card.Description>Add new members to your organisation.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Stack gap="1.5">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" placeholder="Name" />
          </Stack>
          <Stack gap="1.5">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Email" type="email" />
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Invite</Button>
      </Card.Footer>
    </Card.Root>
  );
};
