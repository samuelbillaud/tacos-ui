import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Collapsible } from '@ark-ui/react/collapsible';

import {
  type CollapsibleRecipeVariantProps,
  collapsibleRecipe,
} from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(collapsibleRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, Collapsible.RootProps>,
    CollapsibleRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Collapsible.Root, 'root');

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, Collapsible.ContentProps>>(
  Collapsible.Content,
  'content',
);

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Collapsible.TriggerProps>
>(Collapsible.Trigger, 'trigger');

export {
  CollapsibleContext as Context,
  type CollapsibleContextProps as ContextProps,
} from '@ark-ui/react/collapsible';
