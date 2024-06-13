import type { Meta } from '@storybook/react';

import { Link } from '~/components';

const meta: Meta = {
  title: 'Components/Link',
};

export default meta;

export const Base = () => <Link href="https://tacos-ui.com">Tacos UI</Link>;
