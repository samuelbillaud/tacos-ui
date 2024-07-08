import { FormLabel, Input, type InputProps } from '@tacos-ui/react';

import { Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: InputProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" placeholder="Your Name" {...props} />
    </Stack>
  );
};
