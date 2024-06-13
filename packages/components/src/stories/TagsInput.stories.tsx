import type { Meta } from '@storybook/react';

import { XIcon } from 'lucide-react';

import { Button, IconButton, TagsInput } from '~/components';

const meta: Meta = {
  title: 'Components/Tags Input',
};

export default meta;

export const Base = () => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW="xs">
      <TagsInput.Label>Frameworks</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Context>
          {(api) =>
            api.value.map((value, index) => (
              <TagsInput.Item index={index} key={index} value={value}>
                <TagsInput.ItemPreview>
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger asChild>
                    <IconButton size="xs" variant="outline">
                      <XIcon />
                    </IconButton>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.ItemPreview>
                <TagsInput.ItemInput />
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
        <TagsInput.Input placeholder="Add Framework" />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild>
        <Button variant="outline">Clear</Button>
      </TagsInput.ClearTrigger>
    </TagsInput.Root>
  );
};
