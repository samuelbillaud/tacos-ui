import type { Assign, HTMLArkProps } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { forwardRef } from 'react';

import { ark } from '@ark-ui/react/factory';

import { styled } from '@tacos-ui/styled-system/jsx';
import { type SkeletonRecipeVariantProps, skeletonRecipe } from '@tacos-ui/styled-system/recipes';

const StyledSkeleton = styled(ark.div, skeletonRecipe);

export interface SkeletonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
    SkeletonRecipeVariantProps {
  /**
   *
   * @default false
   */
  isLoaded?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { isLoaded, ...otherProps } = props;

  if (isLoaded) {
    return <styled.div animation="fade-in" ref={ref} {...otherProps} />;
  }

  return <StyledSkeleton ref={ref} {...otherProps} />;
});

Skeleton.displayName = 'Skeleton';
