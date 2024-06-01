import type { Meta } from '@storybook/react';

import { Stack } from '@tacos-ui/styled-system/jsx';

import { Tabs } from '~/components';

const meta: Meta = {
  title: 'Components/Tabs',
};

export default meta;

export const Base = () => {
  return (
    <Tabs.Root defaultValue="react">
      <Tabs.List>
        {options.map((option) => (
          <Tabs.Trigger disabled={option.disabled} key={option.id} value={option.id}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="react">Know React? Check out Solid!</Tabs.Content>
      <Tabs.Content value="solid">Know Solid? Check out Svelte!</Tabs.Content>
      <Tabs.Content value="svelte">Know Svelte? Check out Vue!</Tabs.Content>
      <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
    </Tabs.Root>
  );
};

export const Sizes = () => {
  return (
    <Stack gap="3">
      <Tabs.Root defaultValue="react" size="sm" variant="enclosed">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger disabled={option.disabled} key={option.id} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <Tabs.Root defaultValue="react" size="md" variant="enclosed">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger disabled={option.disabled} key={option.id} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <Tabs.Root defaultValue="react" size="lg" variant="enclosed">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger disabled={option.disabled} key={option.id} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
    </Stack>
  );
};

const options = [
  { id: 'react', label: 'React' },
  { id: 'solid', label: 'Solid' },
  { id: 'svelte', label: 'Svelte', disabled: true },
  { id: 'vue', label: 'Vue' },
];
