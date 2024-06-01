import type { Meta } from '@storybook/react';

import { MapPinIcon } from 'lucide-react';

import { HStack, Stack } from '@tacos-ui/styled-system/jsx';

import { Avatar, HoverCard, Icon, Link, Text } from '~/components';

const meta: Meta = {
  title: 'Components/Hover Card',
};

export default meta;

export const Base = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link href="https://tacos-ui.com" target="_blank">
          @tacos-ui
        </Link>
      </HoverCard.Trigger>

      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <Stack direction="row" gap="4">
            <Avatar name="Samuel Billaud" src="https://avatars.githubusercontent.com/u/13518302" />
            <Stack gap="3">
              <Stack gap="1">
                <Text fontWeight="semibold" size="sm">
                  Samuel Billaud
                </Text>
                <Text color="fg.muted" size="sm">
                  FrontEnd Developer at Mergify
                </Text>
              </Stack>
              <HStack color="fg.subtle" gap="1">
                <Icon size="sm">
                  <MapPinIcon />
                </Icon>
                <Text size="xs">Since 2023</Text>
              </HStack>
            </Stack>
          </Stack>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  );
};
