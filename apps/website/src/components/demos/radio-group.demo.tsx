import { RadioGroup } from '@tacos-ui/react';

export const Demo = (props: RadioGroup.RootProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ];

  return (
    <RadioGroup.Root defaultValue="react" {...props}>
      {options.map((option) => (
        <RadioGroup.Item disabled={option.disabled} key={option.id} value={option.id}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
