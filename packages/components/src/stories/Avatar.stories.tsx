import type { Meta, StoryObj } from '@storybook/react';

import { avatarRecipe } from '@tacos-ui/styled-system/recipes';

import { Avatar } from '~/components';

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: avatarRecipe.variantMap.size,
      control: { type: 'radio' },
      description: 'The size of the avatar',
    },
  },
  args: {
    size: 'md',
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export default meta;

export const Base: Story = {
  args: {
    name: 'Samuel Billaud',
    src: 'https://avatars.githubusercontent.com/u/13518302',
  },
};

export const WithNameOnly: Story = {
  args: {
    name: 'Samuel Billaud',
  },
};

export const WithNoData: Story = {
  args: {},
};
