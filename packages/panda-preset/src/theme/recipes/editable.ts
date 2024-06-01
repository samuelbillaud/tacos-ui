import { defineSlotRecipe } from '@pandacss/dev';

import { editableAnatomy } from '@ark-ui/anatomy';

export const editableRecipe = defineSlotRecipe({
  className: 'editable',
  slots: editableAnatomy.keys(),
  jsx: ['Editable', /Editable\.+/],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: '100%',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
  },
});
