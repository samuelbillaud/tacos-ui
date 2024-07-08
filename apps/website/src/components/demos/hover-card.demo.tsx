import { Avatar, HoverCard, Icon, Link, Text } from '@tacos-ui/react';
import { MapPinIcon } from 'lucide-react';

import { HStack, Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = (props: HoverCard.RootProps) => {
  return (
    <HoverCard.Root {...props}>
      <HoverCard.Trigger asChild>
        <Link href="https://twitter.com/grizzly_codes/">@grizzly_codes</Link>
      </HoverCard.Trigger>

      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <Stack direction="row" gap="4">
            <Avatar
              name="Christian Schröter"
              src="https://avatars.githubusercontent.com/u/1846056"
            />
            <Stack gap="3">
              <Stack gap="1">
                <Text fontWeight="semibold" size="sm">
                  @grizzly_codes
                </Text>
                <Text color="fg.muted" size="sm">
                  Staff Software Engineer working at vivenu GmbH
                </Text>
              </Stack>
              <HStack color="fg.subtle" gap="1">
                <Icon size="sm">
                  <MapPinIcon />
                </Icon>
                <Text size="xs">Joined Dezember 2011</Text>
              </HStack>
            </Stack>
          </Stack>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  );
};
