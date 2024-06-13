import type { Meta } from '@storybook/react';

import { RadioButtonGroup } from '~/components';

const meta: Meta = {
  title: 'Components/Radio Button Group',
};

export default meta;

export const Base = () => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }];

  return (
    <RadioButtonGroup.Root defaultValue="M">
      {options.map((option) => (
        <RadioButtonGroup.Item
          disabled={option.disabled}
          key={option.value}
          px="0"
          value={option.value}
        >
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
          <RadioButtonGroup.ItemHiddenInput />
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  );
};
