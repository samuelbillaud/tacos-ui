import { defineTokens } from '@pandacss/dev';

import { defineColorPalettes } from './helpers/define-color-palettes';

export const defineColorTokens = () => {
  const colorPalettes = defineColorPalettes();

  return defineTokens.colors({
    ...colorPalettes,
    current: { value: 'currentColor' },
    transparent: { value: 'rgb(0 0 0 / 0)' },
    black: {
      DEFAULT: { value: '#000000' },
      a1: { value: 'rgba(0, 0, 0, 0.055)' },
      a2: { value: 'rgba(0, 0, 0, 0.1)' },
      a3: { value: 'rgba(0, 0, 0, 0.15)' },
      a4: { value: 'rgba(0, 0, 0, 0.2)' },
      a5: { value: 'rgba(0, 0, 0, 0.3)' },
      a6: { value: 'rgba(0, 0, 0, 0.4)' },
      a7: { value: 'rgba(0, 0, 0, 0.5)' },
      a8: { value: 'rgba(0, 0, 0, 0.6)' },
      a9: { value: 'rgba(0, 0, 0, 0.7)' },
      a10: { value: 'rgba(0, 0, 0, 0.8)' },
      a11: { value: 'rgba(0, 0, 0, 0.9)' },
      a12: { value: 'rgba(0, 0, 0, 0.95)' },
    },
    white: {
      DEFAULT: { value: '#ffffff' },
      a1: { value: 'rgba(255, 255, 255, 0.05)' },
      a2: { value: 'rgba(255, 255, 255, 0.1)' },
      a3: { value: 'rgba(255, 255, 255, 0.15)' },
      a4: { value: 'rgba(255, 255, 255, 0.2)' },
      a5: { value: 'rgba(255, 255, 255, 0.3)' },
      a6: { value: 'rgba(255, 255, 255, 0.4)' },
      a7: { value: 'rgba(255, 255, 255, 0.5)' },
      a8: { value: 'rgba(255, 255, 255, 0.6)' },
      a9: { value: 'rgba(255, 255, 255, 0.7)' },
      a10: { value: 'rgba(255, 255, 255, 0.8)' },
      a11: { value: 'rgba(255, 255, 255, 0.9)' },
      a12: { value: 'rgba(255, 255, 255, 0.95)' },
    },
  });
};
