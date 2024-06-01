import { type ElementType, forwardRef } from 'react';

import { Text, type TextProps } from './Text';

interface HeadingProps extends TextProps<ElementType> {}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <Text as="h2" ref={ref} variant="heading" {...props} />
));

Heading.displayName = 'Heading';
