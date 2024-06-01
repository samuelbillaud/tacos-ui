import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { ToggleGroup } from '@ark-ui/react/toggle-group';

import {
  type ToggleGroupRecipeVariantProps,
  toggleGroupRecipe,
} from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(toggleGroupRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, ToggleGroup.RootProps>,
    ToggleGroupRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(ToggleGroup.Root, 'root');

export const Item = withContext<HTMLButtonElement, Assign<JsxStyleProps, ToggleGroup.ItemProps>>(
  ToggleGroup.Item,
  'item',
);

export {
  ToggleGroupContext as Context,
  type ToggleGroupContextProps as ContextProps,
} from '@ark-ui/react/toggle-group';
