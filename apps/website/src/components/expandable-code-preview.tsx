import { type PropsWithChildren, useState } from 'react';

import { Button, Collapsible } from '@tacos-ui/react';

import { HStack } from '@tacos-ui/styled-system/jsx';

import { CodePreview } from './code-preview';

interface ExpendableCodePreviewProps {
  code: string;
}

export const ExpendableCodePreview = ({
  code,
  children,
}: PropsWithChildren<ExpendableCodePreviewProps>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => {
    setIsExpanded((previousIsExpanded) => !previousIsExpanded);
  };

  return (
    <Collapsible.Root defaultOpen={isExpanded}>
      <Collapsible.Trigger asChild>
        <HStack justifyContent="flex-end" p="1" width="full">
          <HStack gap="1">
            <Button onClick={onClick} size="sm" variant="ghost">
              {isExpanded ? 'Hide Code' : 'Show Code'}
            </Button>
          </HStack>
        </HStack>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <CodePreview borderTopWidth={isExpanded ? '1px' : 0} code={code}>
          {children}
        </CodePreview>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
