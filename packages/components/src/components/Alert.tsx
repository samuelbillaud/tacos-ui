import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { type AlertRecipeVariantProps, alertRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(alertRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
    AlertRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(ark.div, 'root');

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'content',
);

export const Description = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'description',
);

export const Icon = withContext<HTMLOrSVGElement, Assign<JsxStyleProps, HTMLArkProps<'svg'>>>(
  ark.svg,
  'icon',
);

export const Title = withContext<HTMLHeadingElement, Assign<JsxStyleProps, HTMLArkProps<'h5'>>>(
  ark.h5,
  'title',
);
