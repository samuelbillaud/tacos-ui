import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type InputRecipeVariantProps, inputRecipe } from '@tacos-ui/styled-system/recipes';

export interface InputProps
  extends Assign<Assign<JsxStyleProps, HTMLArkProps<'input'>>, InputRecipeVariantProps> {}
export const Input = styled(ark.input, inputRecipe);
