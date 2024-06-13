import { forwardRef } from 'react';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { buttonRecipe } from '@tacos-ui/styled-system/recipes';

import { BaseButton, type BaseButtonProps } from './BaseButton';

export const IconButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const [variantProps, buttonProps] = buttonRecipe.splitVariantProps(props);

  const [cssProps, localProps] = splitCssProps(buttonProps);

  const styles = buttonRecipe(variantProps);

  const { className, ...rootProps } = localProps;

  return (
    <BaseButton
      className={cx(styles, className, css({ ...cssProps, paddingX: 0 }), className)}
      ref={ref}
      {...rootProps}
    />
  );
});
IconButton.displayName = 'IconButton';
