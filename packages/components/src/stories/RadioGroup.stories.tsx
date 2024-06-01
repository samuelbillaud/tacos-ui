import type { Meta } from '@storybook/react';

import { RadioGroup } from '~/components';

const meta: Meta = {
  title: 'Components/Radio Group',
};

export default meta;

export const Base = () => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ];

  return (
    <RadioGroup.Root defaultValue="react">
      {options.map((option) => (
        <RadioGroup.Item disabled={option.disabled} key={option.id} value={option.id}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
