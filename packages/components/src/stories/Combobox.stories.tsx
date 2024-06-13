import type { Meta } from '@storybook/react';

import { useState } from 'react';

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { Combobox, IconButton, Input } from '~/components';

const meta: Meta = {
  title: 'Components/Combobox',
};

export default meta;

export const Base = () => {
  const data = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ];
  const [items, setItems] = useState(data);

  const handleChange = (e: Combobox.InputValueChangeDetails) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.inputValue.toLowerCase()),
    );

    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Combobox.Root items={items} onInputValueChange={handleChange} width="2xs">
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input asChild placeholder="Select a Framework">
          <Input />
        </Combobox.Input>
        <Combobox.Trigger asChild>
          <IconButton aria-label="open" size="xs" variant="ghost">
            <ChevronsUpDownIcon />
          </IconButton>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
            {items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>
                  <CheckIcon />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};
