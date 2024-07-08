import { generateElement } from 'react-live';

import * as components from '@tacos-ui/react';
import { ExternalLinkIcon, InfoIcon } from 'lucide-react';

import { Box, Flex, HStack, Stack } from '@tacos-ui/styled-system/jsx';

const icons = { InfoIcon, ExternalLinkIcon };
const scope = { ...components, ...icons, Stack, HStack, Box, Flex };

type LivePreviewProps = {
  code: string;
};

export const LivePreview = ({ code }: LivePreviewProps) => {
  const Element = generateElement({ code, scope, enableTypeScript: true }, () => {});

  return <Element />;
};
