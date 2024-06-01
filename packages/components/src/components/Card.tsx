import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { type CardRecipeVariantProps, cardRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(cardRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
    CardRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(ark.div, 'root');

export const Body = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'body',
);

export const Description = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'description',
);

export const Footer = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.footer,
  'footer',
);

export const Header = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'header',
);

export const Title = withContext<HTMLHeadingElement, Assign<JsxStyleProps, HTMLArkProps<'h3'>>>(
  ark.h3,
  'title',
);
