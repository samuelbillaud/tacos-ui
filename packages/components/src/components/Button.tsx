import { forwardRef } from 'react';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { buttonRecipe } from '@tacos-ui/styled-system/recipes';

import { BaseButton, type BaseButtonProps } from './BaseButton';

export interface ButtonProps extends BaseButtonProps {}

export const Button = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const [variantProps, buttonProps] = buttonRecipe.splitVariantProps(props);

  const [cssProps, localProps] = splitCssProps(buttonProps);

  const styles = buttonRecipe(variantProps);

  const { className, ...rootProps } = localProps;

  return <BaseButton className={cx(styles, css(cssProps), className)} ref={ref} {...rootProps} />;
});
Button.displayName = 'Button';
