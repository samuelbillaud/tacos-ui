import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRightIcon } from 'lucide-react';

import { buttonRecipe } from '@tacos-ui/styled-system/recipes';

import { IconButton } from '~/components';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      options: buttonRecipe.variantMap.size,
      control: { type: 'radio' },
      description: 'The size of the icon button',
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
} satisfies Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

export default meta;

export const Base: Story = {
  args: {
    children: <ArrowRightIcon />,
    variant: 'solid',
    isLoading: false,
  },
};

export const Outline: Story = {
  args: {
    children: <ArrowRightIcon />,
    variant: 'outline',
    isLoading: false,
  },
};

export const OutlineAndIsLoading: Story = {
  args: {
    children: <ArrowRightIcon />,
    variant: 'outline',
    isLoading: true,
  },
};
