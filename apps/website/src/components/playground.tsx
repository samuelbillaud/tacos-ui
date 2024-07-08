import { type PropsWithChildren, useState } from 'react';

import { Select, Slider } from '@tacos-ui/react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { sva } from '@tacos-ui/styled-system/css';
import { Box, Flex, Stack, styled } from '@tacos-ui/styled-system/jsx';

import * as demos from './demos';

const styles = sva({
  slots: ['root', 'preview', 'container', 'configurator'],
  base: {
    root: {},
    container: {
      background: 'bg.canvas',
      flexDirection: { base: 'column', md: 'row' },
      divideX: '1px',
      borderBottomWidth: '1px',
    },
    preview: {
      p: { base: '4', md: '6' },
      minH: '40',
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
    },
    configurator: {
      background: 'bg.surface',
      gap: '4',
      px: '4',
      pt: '5',
      pb: '6',
      minW: '240px',
    },
  },
})();

type PlaygroundProps = {
  code?: JSX.Element;
  componentProps?: Record<
    string,
    {
      defaultValue?: string | undefined;
      options?: string[] | undefined;
    }
  >;
  id?: string;
};

const toTitleCase = (str = '') => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export const Playground = ({
  componentProps = {},
  id,
  children,
}: PropsWithChildren<PlaygroundProps>) => {
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(componentProps).map(([key, value]) => [
        key,
        typeof value === 'object' ? value.defaultValue : value,
      ]),
    ),
  );

  const hasSettings = Object.keys(componentProps).length > 0;
  // @ts-expect-error demos is any
  const Component = demos[toTitleCase(id)];

  return (
    <Box>
      <Stack className={styles.container}>
        <Flex className={styles.preview}>
          <Component {...state} />
        </Flex>
        {hasSettings && (
          <Stack className={styles.configurator}>
            {Object.entries(componentProps || {}).map(([key, { options, defaultValue }]) =>
              key === 'size' ? (
                <Slider
                  defaultValue={[options?.indexOf(defaultValue ?? '') ?? 0]}
                  key={key}
                  marks={options?.map((_, index) => ({ value: index })) ?? []}
                  max={(options?.length ?? 0) - 1}
                  min={0}
                  onValueChange={(e) => setState({ ...state, [key]: options?.[e.value[0]] ?? '' })}
                >
                  <styled.span textTransform="capitalize">{key}:</styled.span> {state[key]}
                </Slider>
              ) : (
                <Select.Root
                  closeOnSelect={false}
                  defaultValue={[defaultValue ?? '']}
                  items={options ?? []}
                  key={key}
                  onValueChange={(e) => setState({ ...state, [key]: e.value[0] ?? '' })}
                  positioning={{ sameWidth: true }}
                  size="sm"
                >
                  <Select.Label textTransform="capitalize">{key}</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText />
                      <ChevronsUpDownIcon />
                    </Select.Trigger>
                  </Select.Control>
                  <Select.Positioner>
                    <Select.Content>
                      {(options ?? []).map((option) => (
                        <Select.Item item={option} key={option}>
                          <Select.ItemText>{option}</Select.ItemText>
                          <Select.ItemIndicator>
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Select.Root>
              ),
            )}
          </Stack>
        )}
      </Stack>
      <Box>{children}</Box>
    </Box>
  );
};
