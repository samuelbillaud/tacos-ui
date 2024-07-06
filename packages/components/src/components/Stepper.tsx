import type { PropsWithChildren } from 'react';

import { Box, Circle, Stack } from '@tacos-ui/styled-system/jsx';

import { Heading } from './Heading';

const Steps = ({ children }: PropsWithChildren) => {
  return (
    <Stack gap="8" position="relative">
      <Box bg="border.default" height="full" left="4" position="absolute" top="0" width="1px" />
      {children}
    </Stack>
  );
};

Steps.displayName = 'Steps';

type StepProps = {
  number: string;
  title: string;
};

const Step = ({ number, title, children }: PropsWithChildren<StepProps>) => {
  return (
    <Box>
      <Stack alignItems="center" direction="row" gap="4">
        <Circle
          bg="bg.default"
          borderWidth="1px"
          boxShadow="xs"
          color="fg.default"
          fontWeight="semibold"
          size="8"
          zIndex="1"
        >
          {number}
        </Circle>
        <Heading as="h3" my="0!">
          {title}
        </Heading>
      </Stack>
      <Box css={{ '&> :last-child': { mb: '0' } }} ps="12">
        {children}
      </Box>
    </Box>
  );
};

Step.displayName = 'Step';

export { Step, Steps as Root };
