import type { Assign } from '@ark-ui/react';
import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type CodeRecipeVariantProps, codeRecipe } from '@tacos-ui/styled-system/recipes';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

export interface CodeProps
  extends Assign<JsxStyleProps, HTMLArkProps<'code'>>, CodeRecipeVariantProps {}
export const Code = styled(ark.code, codeRecipe);
