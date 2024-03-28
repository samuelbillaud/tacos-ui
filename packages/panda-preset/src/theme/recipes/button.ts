import { defineSlotRecipe } from '@pandacss/dev';

export const buttonRecipe = defineSlotRecipe({
  slots: ['root', 'loadingIcon'],
  className: 'button',
  base: {
    root: {
      position: 'relative',
      alignItems: 'center',
      borderRadius: 'sm',
      cursor: 'pointer',
      display: 'inline-flex',
      fontWeight: 'semibold',
      justifyContent: 'center',
      outline: 'none',
      transitionDuration: 'normal',
      transitionProperty: 'background, border-color, color',
      transitionTimingFunction: 'default',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

      _hidden: {
        display: 'none',
      },

      _disabled: {
        cursor: 'not-allowed',
      },
    },
    loadingIcon: {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: 'overlay',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& svg': {
        color: 'transparent',
        height: '[1.5em]',
        width: '[1.5em]',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        root: {
          background: 'colorPalette.default',
          color: 'colorPalette.fg',
          colorPalette: 'accent',

          _hover: {
            background: 'colorPalette.emphasized',
          },

          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'colorPalette.default',
            outlineOffset: '2px',
          },

          _disabled: {
            color: 'fg.disabled',
            background: 'bg.disabled',

            _hover: {
              color: 'fg.disabled',
              background: 'bg.disabled',
            },
          },
        },
      },
      outline: {
        root: {
          borderWidth: '1px',
          borderColor: 'colorPalette.a8',
          color: 'colorPalette.text',
          colorPalette: 'gray',

          _hover: {
            background: 'colorPalette.a2',
          },

          _disabled: {
            borderColor: 'border.disabled',
            color: 'fg.disabled',

            _hover: {
              background: 'transparent',
              borderColor: 'border.disabled',
              color: 'fg.disabled',
            },
          },

          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'colorPalette.default',
            outlineOffset: '2px',
          },

          _selected: {
            background: 'accent.default',
            borderColor: 'accent.default',
            color: 'accent.fg',
            _hover: {
              background: 'accent.emphasized',
              borderColor: 'accent.emphasized',
            },
          },
        },
      },
      ghost: {
        root: {
          color: 'colorPalette.text',
          colorPalette: 'gray',

          _hover: {
            background: 'colorPalette.a3',
          },

          _selected: {
            background: 'colorPalette.a3',
          },

          _disabled: {
            color: 'fg.disabled',

            _hover: {
              background: 'transparent',
              color: 'fg.disabled',
            },
          },

          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'colorPalette.default',
            outlineOffset: '2px',
          },
        },
      },
      soft: {
        root: {
          background: 'colorPalette.a3',
          color: 'colorPalette.text',
          colorPalette: 'gray',

          _hover: {
            background: 'colorPalette.a4',
          },

          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'colorPalette.default',
            outlineOffset: '2px',
          },

          _disabled: {
            background: 'bg.disabled',
            color: 'fg.disabled',

            _hover: {
              background: 'bg.disabled',
              color: 'fg.disabled',
            },
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          h: '8',
          minW: '8',
          textStyle: 'xs',
          px: '3',
          gap: '2',

          '& > svg': {
            fontSize: 'md',
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        root: {
          h: '10',
          minW: '10',
          textStyle: 'sm',
          px: '4',
          gap: '2',

          '& > svg': {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        root: {
          h: '12',
          minW: '12',
          textStyle: 'md',
          px: '5',
          gap: '2.5',

          '& > svg': {
            width: '5',
            height: '5',
          },
        },
      },
    },
    isLoading: {
      true: {
        root: {
          color: 'transparent',

          _disabled: {
            color: 'transparent',

            _hover: {
              color: 'transparent',
            },
          },
        },
        loadingIcon: {
          '& svg': {
            color: 'gray.a8',
            animation: 'spin 1s linear infinite',
          },
        },
      },
    },
  },
});
