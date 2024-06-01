import { defineRecipe } from '@pandacss/dev';

export const formLabelRecipe = defineRecipe({
  className: 'formLabel',
  jsx: ['FormLabel', /FormLabel\.+/],
  base: {
    color: 'fg.default',
    fontWeight: 'medium',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        textStyle: 'sm',
      },
      md: {
        textStyle: 'sm',
      },
      lg: {
        textStyle: 'sm',
      },
      xl: {
        textStyle: 'md',
      },
    },
  },
});
