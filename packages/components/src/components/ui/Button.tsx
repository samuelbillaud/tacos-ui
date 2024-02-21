import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { buttonRecipe, type ButtonRecipeVariantProps } from 'styled-system/recipes'

import { splitMarginsProps, type MarginProps } from '~/lib/splitMarginProps'

type BaseButtonProps = HTMLArkProps<'button'>

export interface ButtonProps
  extends ButtonRecipeVariantProps, BaseButtonProps, MarginProps {
    isLoading?: boolean;
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const [variantProps, buttonProps] = buttonRecipe.splitVariantProps(props)
  const [cssProps, localProps] = splitCssProps(buttonProps)
  const [marginProps] = splitMarginsProps(cssProps)

  const { isLoading, disabled } = props;

  const { children, className, asChild, ...rootProps } = localProps
  const styles = buttonRecipe(variantProps)

  return (
    <ark.button
      ref={ref}
      asChild={asChild}
      className={cx(
        styles.root,
        css(marginProps),
        className
      )}
      data-disabled={disabled || isLoading || undefined}
      {...rootProps}
    >
      {
        asChild ? children : (
          <>
            {isLoading ? (
              <ark.span className={styles.loadingIcon}>
                <Loader2 />
              </ark.span>
            ) : null}
            {children}
          </>
        )
      }
    </ark.button>
  )
})

Button.displayName = 'Button'
