import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Dialog } from '@ark-ui/react/dialog';

import { type DialogRecipeVariantProps, dialogRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withRootProvider, withContext } = createStyleContext(dialogRecipe);

export interface RootProps extends Dialog.RootProps, DialogRecipeVariantProps {}
export const Root = withRootProvider<RootProps>(Dialog.Root);

export const Backdrop = withContext<HTMLDivElement, Assign<JsxStyleProps, Dialog.BackdropProps>>(
  Dialog.Backdrop,
  'backdrop',
);

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Dialog.CloseTriggerProps>
>(Dialog.CloseTrigger, 'closeTrigger');

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, Dialog.ContentProps>>(
  Dialog.Content,
  'content',
);

export const Description = withContext<
  HTMLParagraphElement,
  Assign<JsxStyleProps, Dialog.DescriptionProps>
>(Dialog.Description, 'description');

export const Positioner = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Dialog.PositionerProps>
>(Dialog.Positioner, 'positioner');

export const Title = withContext<HTMLHeadingElement, Assign<JsxStyleProps, Dialog.TitleProps>>(
  Dialog.Title,
  'title',
);

export const Trigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, Dialog.TriggerProps>>(
  Dialog.Trigger,
  'trigger',
);

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/react/dialog';
