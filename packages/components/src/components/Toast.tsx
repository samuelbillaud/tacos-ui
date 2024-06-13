import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Toast } from '@ark-ui/react/toast';

import { type ToastRecipeVariantProps, toastRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(toastRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, Toast.RootProps>,
    ToastRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Toast.Root, 'root');

export const ActionTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Toast.ActionTriggerProps>
>(Toast.ActionTrigger, 'actionTrigger');

export const CloseTrigger = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Toast.CloseTriggerProps>
>(Toast.CloseTrigger, 'closeTrigger');

export const Description = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Toast.DescriptionProps>
>(Toast.Description, 'description');

export const Title = withContext<HTMLDivElement, Assign<JsxStyleProps, Toast.TitleProps>>(
  Toast.Title,
  'title',
);

export {
  ToastContext as Context,
  type ToastContextProps as ContextProps,
  Toaster,
  type ToasterProps,
  createToaster,
} from '@ark-ui/react/toast';
