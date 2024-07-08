import { FormLabel, Textarea, type TextareaProps } from '@tacos-ui/react';

import { Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: TextareaProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel htmlFor="description">Description</FormLabel>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  );
};
