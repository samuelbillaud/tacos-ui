import type { Meta } from '@storybook/react';

import { FormLabel } from '~/components';

const meta: Meta = {
  title: 'Components/Form Label',
};

export default meta;

export const Base = () => {
  return <FormLabel>Form Label</FormLabel>;
};
