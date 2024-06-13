import type { Meta, StoryObj } from '@storybook/react';

import { X } from 'lucide-react';

import { buttonRecipe } from '@tacos-ui/styled-system/recipes';

import { Button } from '~/components';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: buttonRecipe.variantMap.size,
      control: { type: 'radio' },
      description: 'The size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If `true`, the button will be disabled',
    },
    onClick: {
      action: 'onClick',
    },
  },
  args: {
    size: 'md',
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export default meta;

export const Base: Story = {
  args: {
    children: 'Confirm',
  },
};

export const Small: Story = {
  args: {
    children: 'Confirm',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Confirm',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Confirm',
    disabled: true,
  },
};

export const OutlineWithLeftIcon: Story = {
  args: {
    children: (
      <>
        <X /> Close
      </>
    ),
    variant: 'outline',
    isLoading: false,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const AsChild: Story = {
  args: {
    children: <a href="#">Go to GitHub</a>,
    variant: 'outline',
    asChild: true,
    isLoading: false,
  },
};

export const SoftAndIsLoading: Story = {
  args: {
    children: 'Confirm',
    variant: 'soft',
    color: 'primary',
    isLoading: true,
  },
};

export const WithResponsiveMargin: Story = {
  args: {
    children: 'Confirm',
    ml: { base: 4, md: 16 },
  },
};
