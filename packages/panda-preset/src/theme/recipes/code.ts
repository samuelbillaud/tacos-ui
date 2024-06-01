import { defineRecipe } from '@pandacss/dev';

export const codeRecipe = defineRecipe({
  className: 'code',
  jsx: ['Code', /Code\.+/],
  base: {
    alignItems: 'center',
    bg: 'bg.subtle',
    borderRadius: 'sm',
    color: 'fg.default',
    display: 'inline-flex',
    fontWeight: 'medium!',
    fontFamily: 'var(--fonts-code)',
    whiteSpace: 'pre',
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        borderWidth: '1px',
      },
      ghost: {},
    },
    size: {
      sm: {
        minHeight: '5',
        px: '0.5',
        textStyle: 'xs',
      },
      md: {
        minHeight: '6',
        textStyle: 'sm',
        px: '1',
        py: '1px',
      },
      lg: {
        minHeight: '7',
        px: '1.5',
        py: '1px',
        textStyle: 'md',
      },
    },
  },
});
