import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { forwardRef } from 'react';

import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type CheckboxRecipeVariantProps, checkboxRecipe } from '@tacos-ui/styled-system/recipes';

export interface CheckboxProps
  extends Assign<JsxStyleProps, ArkCheckbox.RootProps>,
    CheckboxRecipeVariantProps {}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const [variantProps, checkboxProps] = checkboxRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(checkboxProps);
  const { children, className, ...rootProps } = localProps;
  const styles = checkboxRecipe(variantProps);

  return (
    <ArkCheckbox.Root
      className={cx(styles.root, css(cssProps), className)}
      ref={ref}
      {...rootProps}
    >
      <ArkCheckbox.Control className={styles.control}>
        <ArkCheckbox.Indicator className={styles.indicator}>
          <CheckIcon />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator className={styles.indicator} indeterminate>
          <MinusIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {children && <ArkCheckbox.Label className={styles.label}>{children}</ArkCheckbox.Label>}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
});

Checkbox.displayName = 'Checkbox';

const CheckIcon = () => (
  <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <title>Check Icon</title>
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const MinusIcon = () => (
  <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <title>Minus Icon</title>
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
