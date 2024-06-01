import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Accordion } from '@ark-ui/react/accordion';

import { type AccordionRecipeVariantProps, accordionRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(accordionRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, Accordion.RootProps>,
    AccordionRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Accordion.Root, 'root');

export const ItemContent = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Accordion.ItemContentProps>
>(Accordion.ItemContent, 'itemContent');

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Accordion.ItemIndicatorProps>
>(Accordion.ItemIndicator, 'itemIndicator');

export const Item = withContext<HTMLDivElement, Assign<JsxStyleProps, Accordion.ItemProps>>(
  Accordion.Item,
  'item',
);

export const ItemTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Accordion.ItemTriggerProps>
>(Accordion.ItemTrigger, 'itemTrigger');

export {
  AccordionContext as Context,
  type AccordionContextProps as ContextProps,
  AccordionItemContext as ItemContext,
  type AccordionItemContextProps as ItemContextProps,
} from '@ark-ui/react/accordion';

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/accordion';
