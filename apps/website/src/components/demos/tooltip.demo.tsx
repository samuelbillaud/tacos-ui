import { Tooltip } from '@tacos-ui/react';

export const Demo = (props: Tooltip.RootProps) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
);
