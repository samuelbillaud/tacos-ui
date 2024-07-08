import { Button, IconButton, TagsInput } from '@tacos-ui/react';
import { XIcon } from 'lucide-react';

export const Demo = (props: TagsInput.RootProps) => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW="xs" {...props}>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {api.value.map((value, index) => (
                <TagsInput.Item index={index} key={index} value={value}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger asChild>
                      <IconButton size="xs" variant="link">
                        <XIcon />
                      </IconButton>
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              ))}
              <TagsInput.Input placeholder="Add Framework" />
            </TagsInput.Control>
            <TagsInput.ClearTrigger asChild>
              <Button variant="outline">Clear</Button>
            </TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
    </TagsInput.Root>
  );
};
