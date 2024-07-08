import { Skeleton } from '@tacos-ui/react';

import { Circle, HStack, Stack } from '@tacos-ui/styled-system/jsx';

export const Demo = () => {
  return (
    <HStack gap="4" width="full">
      <Skeleton borderRadius="full">
        <Circle size="20" />
      </Skeleton>
      <Stack gap="3.5" width="full">
        <Skeleton h="4" />
        <Skeleton h="4" width="80%" />
        <Skeleton h="4" width="60%" />
      </Stack>
    </HStack>
  );
};
