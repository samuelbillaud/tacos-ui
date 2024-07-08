import { ToggleGroup } from '@tacos-ui/react';
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react';

import { Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: ToggleGroup.RootProps) => {
  return (
    <Stack
      borderRadius="md"
      borderWidth={props.variant === 'ghost' ? '1px' : '0'}
      direction={props.orientation === 'horizontal' ? 'row' : 'column'}
      gap="3"
      p={props.variant === 'ghost' ? '1' : '0'}
    >
      <ToggleGroup.Root multiple {...props}>
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
      <ToggleGroup.Root defaultValue={['left']} {...props}>
        <ToggleGroup.Item aria-label="Align Left" value="left">
          <AlignLeftIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Align Center" value="center">
          <AlignCenterIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Align Right" value="right">
          <AlignRightIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Align Justify" value="justify">
          <AlignJustifyIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </Stack>
  );
};
