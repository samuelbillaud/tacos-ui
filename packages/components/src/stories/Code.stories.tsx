import type { Meta } from '@storybook/react';

import { Code } from '~/components';

const meta: Meta = {
  title: 'Components/Code',
};

export default meta;

export const Base = () => <Code>@tacos-ui/react</Code>;
