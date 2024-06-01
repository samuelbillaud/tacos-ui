import { defineSlotRecipe } from '@pandacss/dev';

import { clipboardAnatomy } from '@ark-ui/anatomy';

export const clipboardRecipe = defineSlotRecipe({
  className: 'clipboard',
  slots: clipboardAnatomy.keys(),
  jsx: ['Clipboard', /Clipboard\.+/],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
    control: {
      display: 'flex',
      gap: '3',
    },
  },
});
