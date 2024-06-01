import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type KbdRecipeVariantProps, kbdRecipe } from '@tacos-ui/styled-system/recipes';

export interface KbdProps
  extends Assign<JsxStyleProps, HTMLArkProps<'kbd'>>,
    KbdRecipeVariantProps {}
export const Kbd = styled(ark.kbd, kbdRecipe);
