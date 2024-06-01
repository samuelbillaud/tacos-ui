import { defineRecipe } from '@pandacss/dev';

export const skeletonRecipe = defineRecipe({
  className: 'skeleton',
  jsx: ['Skeleton', /Skeleton\.+/],
  base: {
    animation: 'skeleton-pulse',
    backgroundClip: 'padding-box',
    backgroundColor: 'gray.a4',
    borderRadius: 'md',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
  },
});
