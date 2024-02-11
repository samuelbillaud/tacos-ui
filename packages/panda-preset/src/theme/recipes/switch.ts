import { switchAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
  className: 'switchRecipe',
  slots: switchAnatomy.keys(),
  base: {
    root: {
      alignItems: 'center',
      colorPalette: 'accent',
      display: 'flex',
      position: 'relative',
    },
    control: {
      alignItems: 'center',
      background: 'bg.emphasized',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _checked: {
        background: 'colorPalette.default',
      },
      _disabled: {
        background: 'bg.disabled',
        cursor: 'not-allowed',

        _checked: {
          background: 'colorPalette.default',
          opacity: '0.5',
        },
      },
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
    },
    thumb: {
      background: 'bg.subtle',
      borderRadius: 'full',
      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      _checked: {
        transform: 'translateX(100%)',
        background: { base: 'bg.subtle', _dark: 'colorPalette.fg' },
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: '2',
        },
        control: {
          width: '7',
          p: '0.5',
        },
        thumb: {
          width: '3',
          height: '3',
        },
        label: {
          textStyle: 'sm',
        },
      },
      md: {
        root: {
          gap: '3',
        },
        control: {
          width: '9',
          p: '0.5',
        },
        thumb: {
          width: '4',
          height: '4',
        },
        label: {
          textStyle: 'md',
        },
      },
      lg: {
        root: {
          gap: '4',
        },
        control: {
          width: '11',
          p: '0.5',
        },
        thumb: {
          width: '5',
          height: '5',
        },
        label: {
          textStyle: 'lg',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
