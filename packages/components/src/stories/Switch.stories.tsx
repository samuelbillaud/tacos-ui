import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '~/components/ui/Switch'
import { switchRecipe } from 'styled-system/recipes'

const meta: Meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    size: {
      options: switchRecipe.variantMap.size,
      control: { type: 'radio' },
      description: 'The size of the switch',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If `true`, the switch will be disabled',
    },
    onCheckedChange: {
      action: 'onCheckedChange',
    }
  },
  args: {
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export default meta;

export const Base: Story = {
  args: {
    children: 'Label',
  },
};

export const Small: Story = {
  args: {
    children: 'Label',
    size: 'sm'
  },
};

export const Large: Story = {
  args: {
    children: 'Label',
    size: 'lg'
  },
};

export const DefaultChecked: Story = {
  args: {
    children: 'Label',
    defaultChecked: true
  },
};

export const Disabled: Story = {
  args: {
    children: 'Label',
    disabled: true,
  },
};

export const WithResponsiveMargin = (args: Story['args']) =>
  <Switch {...args} ml={{ base: 4, md: 16 }}>Label</Switch>;