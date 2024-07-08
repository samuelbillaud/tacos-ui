import { Button, Heading, Text } from '@tacos-ui/react';

import { Container, Stack } from '@tacos-ui/styled-system/jsx';

export const Hero = () => {
  return (
    <Container
      pb={{ base: '16', md: '24' }}
      pt={{ base: '16', md: '32' }}
      px={{ base: '8', md: '12', lg: '16' }}
    >
      <Stack gap={{ base: '8', md: '12' }} maxW="3xl">
        <Stack gap={{ base: '4', md: '6' }}>
          <Heading fontWeight="bold" textStyle={{ base: '4xl', md: '6xl' }}>
            A modern React components library
          </Heading>
          <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }}>
            Tacos UI is a library that used Ark UI and Panda CSS to build a beautiful UI.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
          <Button asChild size={{ base: 'xl', md: '2xl' }}>
            <a aria-label="Go to getting-started page" href="/docs/overview/getting-started">
              Get Started
            </a>
          </Button>
          <Button asChild size={{ base: 'xl', md: '2xl' }} variant="outline">
            <a aria-label="Go to components page" href="/docs/components/accordion">
              Show Components
            </a>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
