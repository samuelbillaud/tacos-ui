import type { Meta } from '@storybook/react';

import { ChevronDownIcon } from 'lucide-react';

import { accordionRecipe } from '@tacos-ui/styled-system/recipes';

import { Accordion } from '~/components';

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion.Root,
  argTypes: {
    size: {
      options: accordionRecipe.variantMap.size,
      control: { type: 'radio' },
      description: 'The size of the accordion',
    },
  },
  args: {
    size: 'md',
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;

export const Base = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue'];

  return (
    <Accordion.Root defaultValue={['React']}>
      {items.map((item) => (
        <Accordion.Item disabled={item === 'Svelte'} key={item} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
            cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export const Multiple = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue'];

  return (
    <Accordion.Root defaultValue={['React']} multiple>
      {items.map((item) => (
        <Accordion.Item disabled={item === 'Svelte'} key={item} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            Pudding donut gummies chupa chups oat cake marzipan biscuit tart. Dessert macaroon ice
            cream bonbon jelly. Jelly topping tiramisu halvah lollipop.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
