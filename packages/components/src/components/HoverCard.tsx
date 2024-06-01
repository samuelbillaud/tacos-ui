import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { HoverCard } from '@ark-ui/react/hover-card';

import { type HoverCardRecipeVariantProps, hoverCardRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withRootProvider, withContext } = createStyleContext(hoverCardRecipe);

export interface RootProps extends HoverCard.RootProps, HoverCardRecipeVariantProps {}
export const Root = withRootProvider<RootProps>(HoverCard.Root);

export const Arrow = withContext<HTMLDivElement, Assign<JsxStyleProps, HoverCard.ArrowProps>>(
  HoverCard.Arrow,
  'arrow',
);

export const ArrowTip = withContext<HTMLDivElement, Assign<JsxStyleProps, HoverCard.ArrowTipProps>>(
  HoverCard.ArrowTip,
  'arrowTip',
);

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, HoverCard.ContentProps>>(
  HoverCard.Content,
  'content',
);

export const Positioner = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, HoverCard.PositionerProps>
>(HoverCard.Positioner, 'positioner');

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, HoverCard.TriggerProps>
>(HoverCard.Trigger, 'trigger');

export {
  HoverCardContext as Context,
  type HoverCardContextProps as ContextProps,
} from '@ark-ui/react/hover-card';
