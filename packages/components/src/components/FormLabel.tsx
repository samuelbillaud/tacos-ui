import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type FormLabelRecipeVariantProps, formLabelRecipe } from '@tacos-ui/styled-system/recipes';

export interface FormLabelProps
  extends Assign<JsxStyleProps, HTMLArkProps<'label'>>,
    FormLabelRecipeVariantProps {}
export const FormLabel = styled(ark.label, formLabelRecipe);
