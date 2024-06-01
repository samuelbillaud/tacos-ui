import type { Meta } from '@storybook/react';

import { useState } from 'react';

import { Box } from '@tacos-ui/styled-system/jsx';

import { Button, Skeleton } from '~/components';

const meta: Meta = {
  title: 'Components/Skeleton',
};

export default meta;

export const Base = () => (
  <Skeleton>
    <div>contents wrapped</div>
    <div>won't be visible</div>
  </Skeleton>
);

export const Controlled = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      <Button onClick={() => setHasLoaded(!hasLoaded)}>Toggle</Button>
      <Skeleton height="8" isLoaded={hasLoaded}>
        <Box height="8">Content</Box>
      </Skeleton>
    </>
  );
};

export const Loaded = () => (
  <Skeleton isLoaded>
    <Box>Is loaded</Box>
  </Skeleton>
);
