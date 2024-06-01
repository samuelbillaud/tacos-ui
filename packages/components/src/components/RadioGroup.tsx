import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { RadioGroup } from '@ark-ui/react/radio-group';

import {
  type RadioGroupRecipeVariantProps,
  radioGroupRecipe,
} from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(radioGroupRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, RadioGroup.RootProps>,
    RadioGroupRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(RadioGroup.Root, 'root');

export const Indicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, RadioGroup.IndicatorProps>
>(RadioGroup.Indicator, 'indicator');

export const ItemControl = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, RadioGroup.ItemControlProps>
>(RadioGroup.ItemControl, 'itemControl');

export const Item = withContext<HTMLLabelElement, Assign<JsxStyleProps, RadioGroup.ItemProps>>(
  RadioGroup.Item,
  'item',
);

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<JsxStyleProps, RadioGroup.ItemTextProps>
>(RadioGroup.ItemText, 'itemText');

export const Label = withContext<HTMLLabelElement, Assign<JsxStyleProps, RadioGroup.LabelProps>>(
  RadioGroup.Label,
  'label',
);
export {
  RadioGroupContext as Context,
  type RadioGroupContextProps as ContextProps,
} from '@ark-ui/react/radio-group';
