import { type ReactNode, forwardRef } from 'react';

import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/react/switch';

import { type MarginProps } from '~/lib/splitMarginProps';

import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { type SwitchRecipeVariantProps, switchRecipe } from '../../../styled-system/recipes';

export interface SwitchProps
  extends SwitchRecipeVariantProps,
    Omit<SwitchRootProps, 'asChild'>,
    MarginProps {
  children?: ReactNode;
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(switchProps);

  const { children, className, ...rootProps } = localProps;
  const styles = switchRecipe(variantProps);

  return (
    <ArkSwitch.Root className={cx(styles.root, css(cssProps), className)} ref={ref} {...rootProps}>
      <ArkSwitch.Control className={styles.control}>
        <ArkSwitch.Thumb className={styles.thumb} />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>}
    </ArkSwitch.Root>
  );
});

Switch.displayName = 'Switch';
