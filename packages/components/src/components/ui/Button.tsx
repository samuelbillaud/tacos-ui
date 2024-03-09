import { forwardRef } from 'react';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';
import { Loader2 } from 'lucide-react';

import { css, cx } from 'styled-system/css';
import { splitCssProps } from 'styled-system/jsx';
import { type ButtonRecipeVariantProps, buttonRecipe } from 'styled-system/recipes';

import { type MarginProps, splitMarginsProps } from '~/lib/splitMarginProps';

type BaseButtonProps = HTMLArkProps<'button'>;

export interface ButtonProps extends ButtonRecipeVariantProps, BaseButtonProps, MarginProps {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const [variantProps, buttonProps] = buttonRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(buttonProps);
  const [marginProps] = splitMarginsProps(cssProps);

  const { isLoading, disabled } = props;

  const { children, className, asChild, ...rootProps } = localProps;
  const styles = buttonRecipe(variantProps);

  return (
    <ark.button
      asChild={asChild}
      className={cx(styles.root, css(marginProps), className)}
      data-disabled={disabled || isLoading || undefined}
      ref={ref}
      {...rootProps}
    >
      {asChild ? (
        children
      ) : (
        <>
          {isLoading ? (
            <ark.span className={styles.loadingIcon}>
              <Loader2 />
            </ark.span>
          ) : null}
          {children}
        </>
      )}
    </ark.button>
  );
});

Button.displayName = 'Button';
