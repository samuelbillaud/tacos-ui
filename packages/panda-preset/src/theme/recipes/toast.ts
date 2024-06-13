import { defineSlotRecipe } from '@pandacss/dev';

import { toastAnatomy } from '@ark-ui/anatomy';

export const toastRecipe = defineSlotRecipe({
  className: 'toast',
  slots: toastAnatomy.keys(),
  jsx: ['Toast', /Toast\.+/],
  base: {
    root: {
      background: 'bg.default',
      borderRadius: 'md',
      boxShadow: 'lg',
      minWidth: 'xs',
      height: 'var(--height)',
      opacity: 'var(--opacity)',
      overflowWrap: 'anywhere',
      p: '4',
      position: 'relative',
      scale: 'var(--scale)',
      translate: 'var(--x) var(--y) 0',
      willChange: 'translate, opacity, scale',
      zIndex: 'var(--z-index)',
      transitionDuration: 'slow',
      transitionProperty: 'translate, scale, opacity, height',
      transitionTimingFunction: 'default',
    },
    title: {
      color: 'fg.default',
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    actionTrigger: {
      mt: '2',
    },
    closeTrigger: {
      position: 'absolute',
      top: '3',
      right: '3',
    },
  },
});
