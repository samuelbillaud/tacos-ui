import type { Meta } from '@storybook/react';

import { Input } from '~/components';

const meta: Meta = {
  title: 'Components/Input',
};

export default meta;

export const Base = () => {
  return <Input id="name" placeholder="Your Name" />;
};
