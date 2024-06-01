import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Editable } from '@ark-ui/react/editable';

import { type EditableRecipeVariantProps, editableRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(editableRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, Editable.RootProps>,
    EditableRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Editable.Root, 'root');

export const Area = withContext<HTMLDivElement, Assign<JsxStyleProps, Editable.AreaProps>>(
  Editable.Area,
  'area',
);

export const CancelTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Editable.CancelTriggerProps>
>(Editable.CancelTrigger, 'cancelTrigger');

export const Control = withContext<HTMLDivElement, Assign<JsxStyleProps, Editable.ControlProps>>(
  Editable.Control,
  'control',
);

export const EditTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Editable.EditTriggerProps>
>(Editable.EditTrigger, 'editTrigger');

export const Input = withContext<HTMLInputElement, Assign<JsxStyleProps, Editable.InputProps>>(
  Editable.Input,
  'input',
);

export const Label = withContext<HTMLLabelElement, Assign<JsxStyleProps, Editable.LabelProps>>(
  Editable.Label,
  'label',
);

export const Preview = withContext<HTMLSpanElement, Assign<JsxStyleProps, Editable.PreviewProps>>(
  Editable.Preview,
  'preview',
);

export const SubmitTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Editable.SubmitTriggerProps>
>(Editable.SubmitTrigger, 'submitTrigger');

export {
  EditableContext as Context,
  type EditableContextProps as ContextProps,
} from '@ark-ui/react/editable';
