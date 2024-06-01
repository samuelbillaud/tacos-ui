import { defineSlotRecipe } from '@pandacss/dev';

import { collapsibleAnatomy } from '@ark-ui/anatomy';

export const collapsibleRecipe = defineSlotRecipe({
  className: 'collapsible',
  slots: collapsibleAnatomy.keys(),
  jsx: ['Collapsible', /Collapsible\.+/],
  base: {
    root: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
    },
    content: {
      overflow: 'hidden',
      width: 'full',
      _open: {
        animation: 'collapse-in',
      },
      _closed: {
        animation: 'collapse-out',
      },
    },
  },
});
