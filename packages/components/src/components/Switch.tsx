import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { forwardRef } from 'react';

import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/react/switch';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type SwitchRecipeVariantProps, switchRecipe } from '@tacos-ui/styled-system/recipes';

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {}

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
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
});

Switch.displayName = 'Switch';
