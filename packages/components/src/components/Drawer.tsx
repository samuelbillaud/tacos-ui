import type { Assign, HTMLArkProps } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { Dialog as Drawer } from '@ark-ui/react/dialog';
import { ark } from '@ark-ui/react/factory';

import { type DrawerRecipeVariantProps, drawerRecipe } from '@tacos-ui/styled-system/recipes';

import { createStyleContext } from '~/lib/create-style-context';

const { withRootProvider, withContext } = createStyleContext(drawerRecipe);

export interface RootProps extends Drawer.RootProps, DrawerRecipeVariantProps {}
export const Root = withRootProvider<RootProps>(Drawer.Root);

export const Backdrop = withContext<HTMLDivElement, Assign<JsxStyleProps, Drawer.BackdropProps>>(
  Drawer.Backdrop,
  'backdrop',
);

export const Body = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'body',
);

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, Drawer.CloseTriggerProps>
>(Drawer.CloseTrigger, 'closeTrigger');

export const Content = withContext<HTMLDivElement, Assign<JsxStyleProps, Drawer.ContentProps>>(
  Drawer.Content,
  'content',
);

export const Description = withContext<
  HTMLParagraphElement,
  Assign<JsxStyleProps, Drawer.DescriptionProps>
>(Drawer.Description, 'description');

export const Footer = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'footer',
);

export const Header = withContext<HTMLDivElement, Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'header',
);

export const Positioner = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, Drawer.PositionerProps>
>(Drawer.Positioner, 'positioner');

export const Title = withContext<HTMLHeadingElement, Assign<JsxStyleProps, Drawer.TitleProps>>(
  Drawer.Title,
  'title',
);

export const Trigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, Drawer.TriggerProps>>(
  Drawer.Trigger,
  'trigger',
);

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/react/dialog';
