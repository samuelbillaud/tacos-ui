import type { Meta } from '@storybook/react';

import { Button, Editable, FormLabel } from '~/components';

const meta: Meta = {
  title: 'Components/Editable',
};

export default meta;

export const Base = () => {
  return (
    <Editable.Root
      activationMode="dblclick"
      defaultValue="Double click to edit"
      placeholder="Your favorite Framework"
    >
      <Editable.Label asChild>
        <FormLabel>Framework</FormLabel>
      </Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.Context>
          {(editable) =>
            editable.editing ? (
              <>
                <Editable.SubmitTrigger asChild>
                  <Button variant="outline">Save</Button>
                </Editable.SubmitTrigger>
                <Editable.CancelTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger asChild>
                <Button variant="outline">Edit</Button>
              </Editable.EditTrigger>
            )
          }
        </Editable.Context>
      </Editable.Control>
    </Editable.Root>
  );
};
