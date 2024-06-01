import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Tabs } from '@ark-ui/react/tabs';

import { type TabsRecipeVariantProps, tabsRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(tabsRecipe);

export interface RootProps extends Assign<JsxStyleProps, Tabs.RootProps>, TabsRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Tabs.Root, 'root');

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, Tabs.ContentProps>>(
  Tabs.Content,
  'content',
);

export const Indicator = withContext<HTMLDivElement, Assign<JsxStyleProps, Tabs.IndicatorProps>>(
  Tabs.Indicator,
  'indicator',
);

export const List = withContext<HTMLDivElement, Assign<JsxStyleProps, Tabs.ListProps>>(
  Tabs.List,
  'list',
);

export const Trigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, Tabs.TriggerProps>>(
  Tabs.Trigger,
  'trigger',
);

export { TabsContext as Context, type TabsContextProps as ContextProps } from '@ark-ui/react/tabs';
