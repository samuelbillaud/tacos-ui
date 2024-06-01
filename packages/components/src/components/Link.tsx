import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type LinkRecipeVariantProps, linkRecipe } from '@tacos-ui/styled-system/recipes';

export interface LinkProps
  extends Assign<JsxStyleProps, HTMLArkProps<'a'>>,
    LinkRecipeVariantProps {}
export const Link = styled(ark.a, linkRecipe);
