import React from 'react';

import type { Assign, HTMLArkProps } from '@ark-ui/react';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type TextRecipeVariantProps, textRecipe } from '@tacos-ui/styled-system/recipes';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<C extends React.ElementType, Props = NonNullable<unknown>> = Omit<
  React.ComponentPropsWithoutRef<C>,
  PropsToOmit<C, Props>
> &
  React.PropsWithChildren<AsProp<C> & Props>;

type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = NonNullable<unknown>> = {
  ref?: PolymorphicRef<C>;
} & PolymorphicComponentProp<C, Props>;

export type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  Assign<JsxStyleProps, HTMLArkProps<'p'>> & TextRecipeVariantProps
>;

export const Text = <C extends React.ElementType = 'p'>(props: TextProps<C>) => {
  const [variantProps, textProps] = textRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(textProps);
  // oxlint-disable-next-line no-unused-vars
  const { className, as: _, ref, ...otherProps } = localProps;
  const styles = textRecipe(variantProps);
  const Component = props.as || 'p';

  return <Component className={cx(styles, css(cssProps), className)} ref={ref} {...otherProps} />;
};
