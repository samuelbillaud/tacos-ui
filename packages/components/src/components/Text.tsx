import type { Assign, HTMLArkProps } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import React from 'react';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type TextRecipeVariantProps, textRecipe } from '@tacos-ui/styled-system/recipes';

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

type PolymorphicComponent = <C extends React.ElementType = 'p'>(
  props: TextProps<C>,
) => React.ReactNode | null;

export const Text: PolymorphicComponent = React.forwardRef(
  <C extends React.ElementType = 'p'>(props: TextProps<C>, ref?: PolymorphicRef<C>) => {
    const [variantProps, textProps] = textRecipe.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(textProps);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- We need to omit `as` from the props
    const { className, as: _, ...otherProps } = localProps;
    const styles = textRecipe(variantProps);
    const Component = props.as || 'p';

    return <Component className={cx(styles, css(cssProps), className)} ref={ref} {...otherProps} />;
  },
);
