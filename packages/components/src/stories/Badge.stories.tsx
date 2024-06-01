import type { Meta, StoryObj } from '@storybook/react';

import { badgeRecipe } from '@tacos-ui/styled-system/recipes';

import { Badge } from '~/components';

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    size: {
      options: badgeRecipe.variantMap.size,
      control: { type: 'radio' },
      description: 'The size of the badge',
    },
    variant: {
      options: badgeRecipe.variantMap.variant,
      control: { type: 'radio' },
      description: 'The variant of the badge',
    },
  },
  args: {
    size: 'md',
    variant: 'solid',
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export default meta;

export const Base: Story = {
  args: {
    children: 'React',
  },
};

export const SmallAndSubtle: Story = {
  args: {
    children: 'Panda',
    size: 'md',
    variant: 'subtle',
  },
};

export const LargeAndOutlined: Story = {
  args: {
    children: 'Ark',
    size: 'lg',
    variant: 'outline',
  },
};
