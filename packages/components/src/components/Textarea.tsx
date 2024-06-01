import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type TextareaRecipeVariantProps, textareaRecipe } from '@tacos-ui/styled-system/recipes';

export interface TextareaProps
  extends Assign<JsxStyleProps, HTMLArkProps<'textarea'>>,
    TextareaRecipeVariantProps {}
export const Textarea = styled(ark.textarea, textareaRecipe);
