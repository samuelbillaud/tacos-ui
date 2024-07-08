import { type PropsWithChildren } from 'react';

import { Box, type BoxProps } from '@tacos-ui/styled-system/jsx';

import { CopyToClipboardButton } from './copy-to-clipboard-button';

interface CodePreviewProps extends BoxProps {
  code: string;
}

export const CodePreview = ({ children, code, ...rest }: PropsWithChildren<CodePreviewProps>) => {
  return (
    <Box bg="neutral.dark.2" position="relative" {...rest}>
      <Box className="dark" position="absolute" right="1" top="1">
        <CopyToClipboardButton content={code} isAlwaysDark />
      </Box>
      <Box maxH="xl" overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
