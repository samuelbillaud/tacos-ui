import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Combobox } from '@ark-ui/react/combobox';

import { type ComboboxRecipeVariantProps, comboboxRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(comboboxRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, Combobox.RootProps<Combobox.CollectionItem>>,
    ComboboxRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Combobox.Root, 'root');

export const ClearTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Combobox.ClearTriggerProps>
>(Combobox.ClearTrigger, 'clearTrigger');

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ContentProps>>(
  Combobox.Content,
  'content',
);

export const Control = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ControlProps>>(
  Combobox.Control,
  'control',
);

export const Input = withContext<HTMLInputElement, Assign<JsxStyleProps, Combobox.InputProps>>(
  Combobox.Input,
  'input',
);

export const ItemGroupLabel = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Combobox.ItemGroupLabelProps>
>(Combobox.ItemGroupLabel, 'itemGroupLabel');

export const ItemGroup = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Combobox.ItemGroupProps>
>(Combobox.ItemGroup, 'itemGroup');

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Combobox.ItemIndicatorProps>
>(Combobox.ItemIndicator, 'itemIndicator');

export const Item = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemProps>>(
  Combobox.Item,
  'item',
);

export const ItemText = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemTextProps>>(
  Combobox.ItemText,
  'itemText',
);

export const Label = withContext<HTMLLabelElement, Assign<JsxStyleProps, Combobox.LabelProps>>(
  Combobox.Label,
  'label',
);

export const Positioner = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Combobox.PositionerProps>
>(Combobox.Positioner, 'positioner');

export const Trigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, Combobox.TriggerProps>>(
  Combobox.Trigger,
  'trigger',
);

export {
  ComboboxContext as Context,
  type ComboboxContextProps as ContextProps,
} from '@ark-ui/react/combobox';

export type {
  ComboboxHighlightChangeDetails as HighlightChangeDetails,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
  ComboboxOpenChangeDetails as OpenChangeDetails,
  ComboboxValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/react/combobox';
