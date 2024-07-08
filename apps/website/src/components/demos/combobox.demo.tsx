import { useState } from 'react';

import { Combobox, IconButton, Input } from '@tacos-ui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
];

export const Demo = (props: Combobox.RootProps) => {
  const [items, setItems] = useState(data);

  const handleChange = (e: Combobox.InputValueChangeDetails) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.inputValue.toLowerCase()),
    );

    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Combobox.Root onInputValueChange={handleChange} width="2xs" {...props} items={items}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input asChild placeholder="Select a Framework">
          <Input />
        </Combobox.Input>
        <Combobox.Trigger asChild>
          <IconButton aria-label="open" size="xs" variant="link">
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
