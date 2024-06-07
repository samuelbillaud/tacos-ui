import { defineSlotRecipe } from '@pandacss/dev';

export const cardRecipe = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
  jsx: ['Card', /Card\.+/],
  base: {
    root: {
      bg: 'bg.default',
      borderRadius: 'md',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      p: '6',
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      pb: '6',
      px: '6',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      pb: '6',
      pt: '2',
      px: '6',
    },
    title: {
      color: 'fg.default',
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
  },
});