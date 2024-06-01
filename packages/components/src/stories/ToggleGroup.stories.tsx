import type { Meta } from '@storybook/react';

import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

import { Stack } from '@tacos-ui/styled-system/jsx';

import { ToggleGroup } from '~/components';

const meta: Meta = {
  title: 'Components/Toggle Group',
};

export default meta;

export const Base = () => {
  return (
    <Stack direction="row">
      <ToggleGroup.Root multiple>
        <ToggleGroup.Item aria-label="Toggle Bold" value="bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle Italic" value="italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle Underline" value="underline">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </Stack>
  );
};
