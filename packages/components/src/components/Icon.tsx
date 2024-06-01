import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { forwardRef } from 'react';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type IconRecipeVariantProps, iconRecipe } from '@tacos-ui/styled-system/recipes';

export interface IconProps
  extends Assign<JsxStyleProps, HTMLArkProps<'svg'>>,
    IconRecipeVariantProps {}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const [variantProps, iconProps] = iconRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(iconProps);
  const { className, ...otherProps } = localProps;
  const styles = iconRecipe(variantProps);

  return (
    <ark.svg asChild className={cx(styles, css(cssProps), className)} ref={ref} {...otherProps} />
  );
});
