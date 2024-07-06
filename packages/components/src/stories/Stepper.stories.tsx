import type { Meta } from '@storybook/react';

import { Stepper } from '~/components';

const meta: Meta = {
  title: 'Components/Stepper',
};

export default meta;

export const Base = () => (
  <Stepper.Root>
    <Stepper.Step number="1" title="Prerequisite">
      Before you start, ensure that your Panda project is set up and ready to go. If not, please
      refer to the [Panda CSS Getting Started
      Guide](https://panda-css.com/docs/overview/getting-started#framework-guides) and once you've
      completed that, come back to this guide.
    </Stepper.Step>
    <Stepper.Step number="2" title="Install Ark UI">
      The first step is to install [Ark UI](https://ark-ui.com).
    </Stepper.Step>
  </Stepper.Root>
);
