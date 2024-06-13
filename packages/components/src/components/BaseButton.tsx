import { Fragment, type PropsWithChildren, forwardRef } from 'react';

import { type HTMLArkProps, ark } from '@ark-ui/react/factory';
import { Loader2 } from 'lucide-react';

import { css, cx } from '@tacos-ui/styled-system/css';
import { Box } from '@tacos-ui/styled-system/jsx';
import { type ButtonRecipeVariantProps } from '@tacos-ui/styled-system/recipes';

import { type MarginProps } from '~/lib/splitMarginProps';

export type ButtonElementProps = HTMLArkProps<'button'>;

export interface BaseButtonProps extends ButtonRecipeVariantProps, ButtonElementProps, MarginProps {
  isLoading?: boolean;
}

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const {
    isLoading = false,
    disabled = props.isLoading,
    children,
    asChild,
    className,
    ...restOfProps
  } = props;

  return (
    <ark.button
      asChild={asChild}
      className={cx(css({ ...(isLoading ? { color: 'transparent' } : {}) }), className)}
      data-disabled={disabled || undefined}
      disabled={disabled}
      ref={ref}
      {...restOfProps}
    >
      {isLoading ? <Loading asChild={asChild}>{children}</Loading> : children}
    </ark.button>
  );
});

interface LoadingProps {
  asChild?: boolean;
}

function Loading({ children, asChild }: PropsWithChildren<LoadingProps>) {
  const LoadingContainer = asChild ? Box : Fragment;

  return (
    <LoadingContainer>
      {children}
      <ark.span
        className={css({
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: 'overlay',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '& > svg': {
            color: 'gray.a8',
            animation: 'spin 1s linear infinite',
            height: '[1.5em]',
            width: '[1.5em]',
          },
        })}
      >
        <Loader2 />
      </ark.span>
    </LoadingContainer>
  );
}

BaseButton.displayName = 'BaseButton';
