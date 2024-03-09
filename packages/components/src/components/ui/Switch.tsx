import { type ReactNode, forwardRef } from 'react';

import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/react/switch';

import { css, cx } from 'styled-system/css';
import { splitCssProps } from 'styled-system/jsx';
import { type SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes';

import { type MarginProps, splitMarginsProps } from '~/lib/splitMarginProps';

export interface SwitchProps
  extends SwitchRecipeVariantProps,
    Omit<SwitchRootProps, 'asChild'>,
    MarginProps {
  children?: ReactNode;
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(switchProps);
  const [marginProps] = splitMarginsProps(cssProps);

  const { children, className, ...rootProps } = localProps;
  const styles = switchRecipe(variantProps);

  return (
    <ArkSwitch.Root
      className={cx(styles.root, css(marginProps), className)}
      ref={ref}
      {...rootProps}
    >
      <ArkSwitch.Control className={styles.control}>
        <ArkSwitch.Thumb className={styles.thumb} />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>}
    </ArkSwitch.Root>
  );
});

Switch.displayName = 'Switch';
